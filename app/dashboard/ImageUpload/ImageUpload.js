'use client'

import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Select from 'react-select';
import { countries } from 'countries-list';

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [aboutProject, setAboutProject] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const cookies = new Cookies();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleAboutProjectChange = (e) => {
    setAboutProject(e.target.value);
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleCategoryChange = (selectedCategoryOption) => {
    setSelectedCategory(selectedCategoryOption);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files[0];
    setSelectedFile(file);

    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.files = e.dataTransfer.files;
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('profileImage', selectedFile);
    formData.append('project_Name', projectName);
    formData.append('country', selectedCountry.label);
    formData.append('category', selectedCategory.value);
    formData.append('aboutProject', aboutProject);

    const jwtToken = cookies.get('userLoginToken');

    try {
      const response = await axios.post('http://localhost:3080/imageUpload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (response.status === 200) {
        setSuccessMessage('Project created successfully.');
        setErrorMessage('');
      } else {
        setErrorMessage('Something went wrong.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  };

  const countryOptions = Object.keys(countries).map((code) => ({
    value: code,
    label: countries[code].name,
  }));

  return (
    <div
      className={`max-w-md mx-auto p-6 bg-dashboardSidebarBG text-dashboardSidebarAccentColor rounded-md shadow-md ${
        isDragOver ? 'border border-blue-300' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Select
        className='mb-4'
        value={selectedCountry}
        options={countryOptions}
        onChange={handleCountryChange}
        placeholder="Select a country"
      />
      <Select
        className='mb-4'
        value={selectedCategory}
        options={[
          { value: 'business', label: 'Business' },
          { value: 'creator', label: 'Creator' },
          { value: 'non-profit', label: 'Non Profit' },
          { value: 'government-agency', label: 'Government Agency' },
        ]}
        onChange={handleCategoryChange}
        placeholder="Select a category"
      />
      <input
        type="text"
        name="project_name"
        placeholder="Project Name"
        className="w-full py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleProjectNameChange}
      />
      <textarea
        name="about_project"
        placeholder="What's your project about?"
        className="w-full py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleAboutProjectChange}
      />
      <input
        type="file"
        id="fileInput"
        name="profileImage"
        className="w-full py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleFileChange}
      />
      
      {successMessage && <div className="text-green-600 mb-2">{successMessage}</div>}
      {errorMessage && <div className="text-red-600 mb-2">{errorMessage}</div>}

      <button
        onClick={handleUpload}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
      >
        Create Project
      </button>
    </div>
  );
}

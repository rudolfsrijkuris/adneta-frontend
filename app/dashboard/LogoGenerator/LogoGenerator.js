'use client'

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../Landing/horizontal-logo.jpg';

const LogoGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading

  const handleButtonClick = async () => {
    try {
      // Set loading to true when button is clicked
      setLoading(true);

      // Make the API call to your Express.js backend
      const response = await axios.post('http://localhost:3080/saveLogoToDB', { prompt, style });

      // Handle the response or update state accordingly
      setResult(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    } finally {
      // Set loading to false when request completes (whether successful or not)
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-lg mx-auto bg-white p-8 border rounded shadow-md">
        {/* <h2 className="text-2xl font-bold mb-4">Generate an AI image</h2> */}
        <a href="https://forms.gle/PhHjCz7CS3s9y5PdA" className="text-sm font-bold mb-2 text-blue-600">Uzraksti atsauksmi</a>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prompt">
            Ievadi tekstu
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="style">
            Izvēlies stilu
          </label>
          <select
            id="style"
            className="border rounded w-full py-2 px-3"
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="Futuristic Futuristic">Futūristisks</option>
            <option value="Fooocus Cinematic">Kinemātisks</option>
            <option value="Artstyle Impressionist">Impresionisms</option>
          </select>
        </div>

        {/* Conditionally render loading animation */}
        <button
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 relative disabled:opacity-50"
          onClick={handleButtonClick}
          disabled={loading} // Disable button while loading
        >
          <span className="mr-2">{loading ? 'Ģenerē...' : 'Ģenerēt attēlu'}</span>
        </button>

        {result && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Attēls:</h3>
            <img src={result} alt="Generated Image" className="max-w-full h-auto rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoGenerator;

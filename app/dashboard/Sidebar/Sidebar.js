'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const Sidebar = () => {
  const [projects, setProjects] = useState([]);
  const cookies = new Cookies();

  useEffect(() => {
    // Fetch projects when the component mounts
    const jwtToken = cookies.get('userLoginToken');

    axios.get('http://localhost:3080/getProjects', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setProjects(response.data);
      } else {
        console.error('Error fetching projects');
      }
    })
    .catch((error) => {
      console.error('Error fetching projects:', error);
    });
  }, []);

  return (
    <div className="w-64 h-screen p-4">
      {/* First Section */}
      <div className="bg-dashboardSidebarBG rounded-md mb-4 p-4">
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center text-dashboardSidebarAccentColor font-urbanist font-semibold hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-dashboardSidebarAccentColor font-urbanist font-semibold hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Posts
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-dashboardSidebarAccentColor font-urbanist font-semibold hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Engagement
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-dashboardSidebarAccentColor font-urbanist font-semibold hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Statistics
            </a>
          </li>
        </ul>
      </div>

      {/* Second Section */}
      <div className="bg-dashboardSidebarBG rounded-md p-4">
        <h2 className="text-dashboardSidebarAccentColor font-urbanist text-lg font-semibold mb-2">Projects</h2>
        <ul>
          {/** Map through your list of companies and render each one */}
          {projects.map((project, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="flex items-center text-dashboardSidebarAccentColor font-urbanist font-semibold hover:text-gray-300">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="h-8 w-8 mr-2"
                />
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

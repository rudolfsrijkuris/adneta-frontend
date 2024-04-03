import React, { useState } from 'react';
import logo from './adneta_full-logo_dark.png';
import Link from 'next/link';
//import { BellIcon, GlobeAltIcon, MoonIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenResources, setIsOpenResources] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownCompany = () => {
    setIsOpenCompany(!isOpenCompany);
  };

  const toggleDropdownResources = () => {
    setIsOpenResources(!isOpenResources);
  };

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="../../landing"><img src={logo.src} alt="Adneta" className="w-15 h-8" /></Link>
        </div>

        {/* Navigation Links  */}
        <div className="hidden md:flex space-x-6">
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="font-bold text-grayAccent hover:text-blueAccent"
            >
              Products
              <svg
                className={`${
                  isOpen ? 'rotate-180' : ''
                } inline-block w-4 h-4 ml-1 transition-transform duration-300 transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isOpen && (
              <div className="absolute mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                {/* Add dropdown menu items */}
                <a href="#" className="block px-4 py-2">Auto</a>
                <a href="#" className="block px-4 py-2">Social Media Dashboard</a>
                {/* Add more menu items */}
              </div>
            )}
          </div>

          {/* Add other navigation links in a similar way */}

          {/* Company */}
          <div className="relative group">
            <button
              onClick={toggleDropdownCompany}
              className="font-bold text-grayAccent hover:text-blueAccent"
            >
              Company
              <svg
                className={`${
                  isOpenCompany ? 'rotate-180' : ''
                } inline-block w-4 h-4 ml-1 transition-transform duration-300 transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isOpenCompany && (
              <div className="absolute mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                {/* Add dropdown menu items */}
                <a href="#" className="block px-4 py-2">Auto</a>
                <a href="#" className="block px-4 py-2">Social Media Dashboard</a>
                {/* Add more menu items */}
              </div>
            )}
          </div>


          {/* Resources */}
          <div className="relative group">
            <button
              onClick={toggleDropdownResources}
              className="font-bold text-grayAccent hover:text-blueAccent"
            >
              Resources
              <svg
                className={`${
                  isOpenResources ? 'rotate-180' : ''
                } inline-block w-4 h-4 ml-1 transition-transform duration-300 transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isOpenResources && (
              <div className="absolute mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                {/* Add dropdown menu items */}
                <a href="#" className="block px-4 py-2">Auto</a>
                <a href="#" className="block px-4 py-2">Social Media Dashboard</a>
                {/* Add more menu items */}
              </div>
            )}
          </div>


          {/* Support */}
          <div className="relative group">
            <button
              onClick='#'
              className="font-bold text-grayAccent hover:text-blueAccent"
            >
              Support
            </button>
          </div>


          {/* Pricing */}
          <div className="relative group">
            <button
              onClick='#'
              className="font-bold text-grayAccent hover:text-blueAccent"
            >
              Pricing
            </button>
          </div>


        </div>

        {/* Radial Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-900 hover:text-blue-500">
            {/* <MoonIcon /> */}
          </button>
          <button className="text-gray-900 hover:text-blue-500">
            {/* <GlobeAltIcon /> */}
          </button>
          <button className="text-gray-900 hover:text-blue-500">
            <i className="fas fa-dollar-sign"></i>
          </button>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="font-bold text-grayAccent hover:text-blueAccent">Log In</button>
          <button className="bg-gradient-to-t from-blueGradientBottom to-blueGradientTop text-white font-bold px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

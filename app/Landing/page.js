'use client'

import React, { useState } from 'react';
import axios from 'axios';
import logo from './horizontal-logo.jpg';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post('YOUR_API_ENDPOINT', { email });
      setSuccess(true);
    } catch (error) {
      setError('Failed to sign up. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="bg-white border rounded-lg shadow-md p-8 max-w-md w-full">
        <img src={logo.src} alt="Logo" className="mx-auto mb-4 mt-4 h-16 w-auto" />
        <h2 className="text-black text-left mb-4 font-bold">
            Sign Up for Our Newsletter
        </h2>
        <p className="text-black text-center mb-4">
            Stay in the loop with all things Adneta by signing up for our exclusive newsletter! Get ready to unlock a world of exciting updates, special offers, and insider insights delivered straight to your inbox.
        </p>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />
        <button
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleSignUp}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {success && <p className="text-green-500 text-center mt-2">Signed up successfully!</p>}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

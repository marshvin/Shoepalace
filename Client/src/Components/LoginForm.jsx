// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/signin', {
        email,
        password,
      });

      console.log('Signin successful:', response.data);
      setSignupSuccess(true);
    } catch (error) {
      console.error('Error signing in:', error.response.data);
    }
  };

  return (
    <div className="max-w-md bg-blue-300 mx-auto mt-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
        <img
          src="/logo1.jpg"
          alt="Company Logo"
          className="mx-auto mb-4 rounded-full"
          style={{ maxWidth: '200px', borderRadius: '50%' }}
        />
      </div>

      {signupSuccess && (
        <div className="mb-4 text-green-600 text-center font-bold">
          Sign in successful! Welcome back.
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="text-center">
        <a className="text-blue-500 hover:underline" href="/forgot-password">
          Forgot Password?
        </a>
      </div>

      <div className="text-center mt-4">
        <p className="text-gray-700">
          Don't have an account? 
          <Link to="/signup" className="text-blue-500 hover:underline">
          Sign Up
          </Link>
          
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

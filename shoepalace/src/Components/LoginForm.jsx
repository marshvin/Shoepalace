import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/signin', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      setLoginSuccess(true);
      setLoginError('');

      // Redirect to the home page after successful login
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error.response.data);
      setLoginError(error.response.data.error || 'An error occurred during login');
      setLoginSuccess(false);
    }
  };

  return (
    <div className="max-w-md bg-blue-300 mx-auto mt-8 p-8 rounded">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
      </div>

      {loginSuccess && (
        <div className="mb-4 text-green-600 text-center font-bold">
          Login successful! Welcome back.
        </div>
      )}

      {loginError && (
        <div className="mb-4 text-red-600 text-center font-bold">
          {loginError}
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

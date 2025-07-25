import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    console.log("login button clicked ✅");
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-56.5px)] flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">User Login</h1>

        <div className="space-y-4 py-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <a href="/forgetpass">
          <span className='flex justify-end text-blue-500 text-sm hover:underline pb-1.5'>Forgot Password?</span>
          </a>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          {message && (
            <p className="text-center text-sm text-red-600 mt-2">{message}</p>
          )}
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account? <span className="text-blue-600 font-medium cursor-pointer hover:underline">Sign up</span>
        </div>
      </div>
    </div>
  );
}

export default Login;

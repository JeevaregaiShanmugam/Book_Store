import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic form validation: check if both fields are filled
    if (!username || !password) {
      setError('Both username and password are required!');
      return; // Stop further execution
    }

    // Dummy login logic for Admin
    if (username === 'admin' && password === 'admin123') {
      setRole('admin');
      navigate('/admin');  // Redirect to Admin dashboard
    } 
    // Basic login logic for User (any username and password allowed)
    else if (username && password) {
      setRole('user');
      navigate('/user');  // Redirect to User homepage
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        {/* Display error message if there's an error */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border mb-4 rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

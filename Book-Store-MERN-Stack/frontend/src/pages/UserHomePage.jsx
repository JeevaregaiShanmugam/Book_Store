import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton'; // Add the logout button here

const UserHomePage = ({ setRole }) => {
  return (
    <div className="relative p-6 bg-gray-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold">User Home</h1>
        <p>Welcome, user! Explore and enjoy our book collection.</p>
      </div>

      {/* Logout Button */}
      <div className="absolute top-6 right-6">
        <LogoutButton setRole={setRole} />
      </div>

      <div className="text-center mt-6">
        <Link to="/homes">
          <button className="bg-sky-500 text-white hover:bg-sky-600 px-6 py-2 rounded-md">
            View Books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserHomePage;

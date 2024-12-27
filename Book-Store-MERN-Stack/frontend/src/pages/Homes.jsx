import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import UserBooksCard from '../components/home/UserBookCard'; // Assuming this is the card component for users
import LogoutButton from './LogoutButton';  // Make sure LogoutButton is imported

const Homes = ({ setRole }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header section with book count and logout button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">Books List</h1>
        <h2 className="text-xl font-medium text-gray-600">Total Books: {books.length}</h2>
        {/* Add Logout Button */}
        <LogoutButton setRole={setRole} />
      </div>

      {/* Loading spinner or user-specific card view */}
      {loading ? (
        <Spinner />
      ) : (
        <UserBooksCard books={books} /> // Render the user-specific card view
      )}
    </div>
  );
};

export default Homes;

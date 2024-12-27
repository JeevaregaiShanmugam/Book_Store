import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard'; // Component for displaying books as cards
import LogoutButton from './LogoutButton'; // Add the logout button here

const Home = ({ setRole }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table'); // State for switching view types

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
      {/* Button for switching between table and card view */}
      <div className="flex justify-center gap-6 mb-6">
        <button
          className="bg-sky-500 text-white hover:bg-sky-600 px-6 py-2 rounded-lg shadow-lg transition duration-300"
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className="bg-sky-500 text-white hover:bg-sky-600 px-6 py-2 rounded-lg shadow-lg transition duration-300"
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
      </div>

      {/* Header with Book Count and Logout Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">Books List</h1>
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-medium text-gray-600">Total Books: {books.length}</h2>
          <LogoutButton setRole={setRole} /> {/* Logout button */}
        </div>
      </div>

      {/* Loading spinner or display books in the selected format */}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {showType === 'table' ? (
            <BooksTable books={books} />  // Display books in a table format
          ) : (
            <BooksCard books={books} />  // Display books in a card format
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

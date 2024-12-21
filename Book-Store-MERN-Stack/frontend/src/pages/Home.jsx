import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        console.log("API Response:", response.data);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Buttons for switching between table and card view */}
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

      {/* Header section with book count and add new book button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">Books List</h1>
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-medium text-gray-600">Total Books: {books.length}</h2>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl hover:text-sky-600 cursor-pointer transition duration-200" />
          </Link>
        </div>
      </div>

      {/* Loading spinner or book display */}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {/* Conditionally render table or card */}
          {showType === 'table' ? (
            <BooksTable books={books} />
          ) : (
            <BooksCard books={books} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

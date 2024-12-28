import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import UserBooksCard from '../components/home/UserBookCard';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';

const Homes = ({ setRole }) => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        console.log(response.data); // Ensure data is correct
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (book) => {
    const updatedCart = [...cart, { ...book, quantity: 1 }];
    setCart(updatedCart);
    // Store the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">Books List</h1>
        <Link
          to="/cart"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          View Cart ({cart.length})
        </Link>
        <LogoutButton setRole={setRole} />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <UserBooksCard books={books} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Homes;

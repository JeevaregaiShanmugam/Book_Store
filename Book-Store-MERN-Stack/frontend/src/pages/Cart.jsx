import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  console.log(cart); // Check cart contents

  const handleRemove = (_id) => {
    const updatedCart = cart.filter((item) => item._id !== _id); // Use _id to remove the correct item
    setCart(updatedCart);
    // Update cart in localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li
                  key={`${item._id}-${item.title}`} // Use _id and title as the key for uniqueness
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <p className="text-lg font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">Author: {item.author}</p>
                      <p className="text-sm text-gray-500">Price: ${item.price}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)} // Use _id when removing
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
              <Link
                to="/payment"
                state={{ cart }} // Pass updated cart to the payment page
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Proceed to Payment
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

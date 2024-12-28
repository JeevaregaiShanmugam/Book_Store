import { useNavigate } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { useState } from 'react';
import { Button } from '@mui/material';
import BookModal from './BookModal';

const UserBooksCard = ({ books, addToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-100">
      {books.map((item) => (
        <div
          className="transition-transform transform hover:scale-105 duration-300 bg-white shadow-md rounded-lg overflow-hidden"
          key={item._id}
        >
          {/* Book Card */}
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.author}</p>
            <p className="text-sm text-gray-500">Price: ${item.price}</p>
            <div className="flex justify-between items-center mt-4">
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleShowModal(item)}
              >
                <BsInfoCircle className="mr-1" /> View Details
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Conditionally render the BookModal */}
      {showModal && selectedBook && (
        <BookModal book={selectedBook} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default UserBooksCard;

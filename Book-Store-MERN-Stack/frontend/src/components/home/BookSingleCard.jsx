import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 relative hover:shadow-2xl transform transition-all duration-300">
      <h2 className="absolute top-2 right-2 px-4 py-1 bg-red-300 rounded-lg font-bold">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-600 text-sm">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-3xl" />
        <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-3xl" />
        <h3 className="text-md text-gray-600">{book.author}</h3>
      </div>
      <div className="flex justify-between items-center gap-x-4 mt-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-blue-600 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-green-600" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-400" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400" />
        </Link>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;

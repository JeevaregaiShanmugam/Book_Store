import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/books' }) => {
  const navigate = useNavigate();  // Initialize navigate function

  const handleBackClick = () => {
    navigate(destination);  // Programmatically navigate to the specified destination
  };

  return (
    <div className='flex'>
      <button
        onClick={handleBackClick}  // Call the handleBackClick function on button click
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />  {/* Icon for the back button */}
      </button>
    </div>
  );
};

export default BackButton;

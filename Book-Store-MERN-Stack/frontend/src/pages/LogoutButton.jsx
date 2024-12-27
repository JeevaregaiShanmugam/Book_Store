import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);  // Clear the role from state
    localStorage.removeItem('role');  // Clear the role from localStorage
    navigate('/');  // Navigate back to the login page
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded-md"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

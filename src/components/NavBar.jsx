import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('email'); // Clear role from storage
    //onLogout(); // Update app state
    navigate('/'); // Redirect to login page
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Find Your Dream Job 🚀</h1>

      <div className="flex items-center gap-4">
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

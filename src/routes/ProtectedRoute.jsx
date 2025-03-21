import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, allowedRole }) => {
  const userRole = localStorage.getItem('role');

  return userRole === allowedRole ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { dummyUsers } from '../data/dummyUsers';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = dummyUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('role', user.role);
      localStorage.setItem('email', user.email);
      navigate(user.role === 'admin' ? '/admin' : '/Home');
    } else {
      setError('Invalid credentials! Please try again.');
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Sign in to continue
        </p>

        {error && (
          <p className="text-red-500 text-center mt-2 font-semibold">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Sign In
          </button>
        </form>

       
      </div>
    </motion.div>
  );
};

export default LoginForm;


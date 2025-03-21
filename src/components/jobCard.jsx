import { motion } from 'framer-motion';

const JobCard = ({ job }) => {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={job.logo}
        alt={job.company}
        className="w-20 h-20 mb-4 rounded-full object-contain bg-white p-2 shadow-md"
      />
      <h2 className="text-2xl font-semibold text-center">{job.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        {job.company} - {job.location}
      </p>
      <p className="text-gray-500 text-sm text-center mt-2">
        {job.description}
      </p>
      <p className="mt-2 font-semibold">💰 Salary: ${job.salary}</p>
      <p className="text-sm">
        📌 Type: {job.type} | 🎯 Role: {job.role}
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Apply Now
      </button>
    </motion.div>
  );
};

export default JobCard;

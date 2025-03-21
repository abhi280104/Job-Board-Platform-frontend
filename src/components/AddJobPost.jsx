import { useState } from 'react';
import { motion } from 'framer-motion';

const AddJobPost = ({ onAddJob }) => {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Full-Time',
    role: '',
    description: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (job.title && job.company && job.location) {
      onAddJob(job);
      setJob({
        title: '',
        company: '',
        location: '',
        salary: '',
        type: 'Full-Time',
        role: '',
        description: '',
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Add New Job Posting
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={job.company}
          onChange={handleChange}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary (Optional)"
          value={job.salary}
          onChange={handleChange}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
        />
        <select
          name="type"
          value={job.type}
          onChange={handleChange}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        <input
          type="text"
          name="role"
          placeholder="Job Role (e.g., Software Engineer, Designer)"
          value={job.role}
          onChange={handleChange}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white h-24"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Add Job
        </button>
      </form>
    </motion.div>
  );
};

export default AddJobPost;

import { useState } from 'react';
import AddJobPost from '../components/AddJobPost';
import NavBar from '../components/NavBar';

const Admin = () => {
  const [jobs, setJobs] = useState([]);

  const handleAddJob = (newJob) => {
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Add Jobs
        </h1>

        <AddJobPost onAddJob={handleAddJob} />

        {/* Display added jobs */}
        <div className="mt-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md mb-3"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {job.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {job.company} - {job.location}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {job.type} | 💰 {job.salary || 'Not Disclosed'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;

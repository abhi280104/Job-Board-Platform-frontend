import { useState } from 'react';
import { jobsData } from '../data/jobsData';
import SearchFilter from './SearchFilter';
import JobCard from './jobCard';

const JobList = () => {
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    salary: '',
    type: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Apply Filters
  const filteredJobs = jobsData.filter(
    (job) =>
      (filters.search === '' ||
        job.title.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.location === '' || job.location === filters.location) &&
      (filters.salary === '' || job.salary === filters.salary) &&
      (filters.type === '' || job.type === filters.type)
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div>
      <SearchFilter filters={filters} setFilters={setFilters} />

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentJobs.length === 0 ? (
          <p className="text-center text-gray-500 col-span-3">No jobs found.</p>
        ) : (
          currentJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
            disabled={currentPage === 1}
          >
            ◀ Previous
          </button>

          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;

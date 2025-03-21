const SearchFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* 🔍 Search */}
      <input
        type="text"
        name="search"
        placeholder="Search jobs..."
        value={filters.search}
        onChange={handleChange}
        className="p-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
      />

      {/* 🌍 Region */}
      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="p-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      >
        <option value="">All Locations</option>
        <option value="United States">United States</option>
        <option value="Remote">Remote</option>
        <option value="India">India</option>
      </select>

      {/* 💰 Salary */}
      <select
        name="salary"
        value={filters.salary}
        onChange={handleChange}
        className="p-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      >
        <option value="">Any Salary</option>
        <option value="80000-100000">80K - 100K</option>
        <option value="100000-120000">100K - 120K</option>
      </select>

      {/* 🎯 Job Type */}
      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
        className="p-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      >
        <option value="">Any Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Contract">Contract</option>
      </select>
    </div>
  );
};

export default SearchFilter;

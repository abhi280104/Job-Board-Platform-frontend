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
        className="p-2 border rounded-md"
      />

      {/* 🌍 Region */}
      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="p-2 border rounded-md"
      >
        <option className="text-black dark:text-white" value="">
          All Locations
        </option>
        <option className="text-black dark:text-white" value="United States">
          United States
        </option>
        <option className="text-black dark:text-white" value="Remote">
          Remote
        </option>
        <option className="text-black dark:text-white" value="India">
          India
        </option>
      </select>

      {/* 💰 Salary */}
      <select
        name="salary"
        value={filters.salary}
        onChange={handleChange}
        className="p-2 border rounded-md"
      >
        <option className="text-black dark:text-white" value="">
          Any Salary
        </option>
        <option className="text-black dark:text-white" value="80000-100000">
          80K - 100K
        </option>
        <option className="text-black dark:text-white" value="100000-120000">
          100K - 120K
        </option>
      </select>

      {/* 🎯 Job Type */}
      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
        className="p-2 border rounded-md"
      >
        <option className="text-black dark:text-white" value="">
          Any Type
        </option>
        <option className="text-black dark:text-white" value="Full-Time">
          Full-Time
        </option>
        <option className="text-black dark:text-white" value="Contract">
          Contract
        </option>
      </select>
    </div>
  );
};

export default SearchFilter;

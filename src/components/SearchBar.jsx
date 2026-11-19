
import React from "react";

function SearchBar({ search, setSearch, students = [] }) {

  const handleClear = () => {
    setSearch("");
  };

  return (
    <div className="searchbar-container">

      {/* Search Heading */}
      <div className="searchbar-heading">
        <div>
          <h2>Student Records</h2>
          <p>Search and manage registered students</p>
        </div>

        <span className="student-count">
          {students.length} Students
        </span>
      </div>

      {/* Search Input */}
      <div className="search-input-wrapper">

        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search by student name, register number or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-search"
            onClick={handleClear}
            type="button"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}

      </div>

      {/* Search Result Information */}
      <div className="search-result-info">
        {search ? (
          <p>
            Searching for: <strong>{search}</strong>
          </p>
        ) : (
          <p>Showing all registered students</p>
        )}
      </div>

    </div>
  );
}

export default SearchBar;

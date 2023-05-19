import React from 'react';

function GenreFilter({ onFilterChange }) {
  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">All</option>
      {/* Ajoutez d'autres genres ici */}
      <option value="action">Action</option>
      <option value="drama">Drama</option>
      <option value="comedy">Comedy</option>
    </select>
  );
}

export default GenreFilter;

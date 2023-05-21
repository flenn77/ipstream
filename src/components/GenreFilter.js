import React, { useEffect, useState } from 'react';
import './css/GenreFilter.css';

function GenreFilter({ onFilterChange }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=64937e8ca9376b0baf3db4a6b1b7087f')
      .then(response => response.json())
      .then(data => setGenres(data.genres))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <select className="genre-filter" onChange={handleChange}>
    <option value="">Filtrer</option>
    {genres.map(genre => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ))}
  </select>
  );
}

export default GenreFilter;

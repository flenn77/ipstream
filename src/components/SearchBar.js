import React, { useEffect, useState } from 'react';

function SearchBar({ setMovies }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=64937e8ca9376b0baf3db4a6b1b7087f&query=${query}`)
        .then(response => response.json())
        .then(data => setMovies(data.results));
    }
  }, [query, setMovies]);

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..." 
      />
    </div>
  );
}

export default SearchBar;

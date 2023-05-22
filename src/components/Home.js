import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';


import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';



function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(0);

  useEffect(() => {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=64937e8ca9376b0baf3db4a6b1b7087f';
    if (selectedGenre) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=64937e8ca9376b0baf3db4a6b1b7087f&with_genres=${selectedGenre}`;
    }
    url += `&page=${currentPage}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, [selectedGenre, currentPage]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

 

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };


  return (
    <div className="home-container">
      <div className="search-genre-bar">
        
     
        <div className="search-bar">
          <SearchBar setMovies={setMovies} />
        </div>
        <div className="genre-filter">
          <GenreFilter onFilterChange={handleGenreChange} />
        </div>
      </div>

      <Row className="movie-container">
        {movies.map(movie => (
          <Col md={2} sm={3} xs={6} key={movie.id} className="movie-card">
            <Link to={`/detail/${movie.id}`}>
              <Card className="text-center mx-auto mb-3">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title className="movie-title">{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <div className="pagination">
        <Button
          variant="primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Précédent
        </Button>
        <Button
          variant="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Suivant
        </Button>
      </div>

    </div>
  );
}


export default Home;

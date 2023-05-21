import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=64937e8ca9376b0baf3db4a6b1b7087f';
    if (selectedGenre) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=64937e8ca9376b0baf3db4a6b1b7087f&with_genres=${selectedGenre}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, [selectedGenre]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <SearchBar setMovies={setMovies} />
      <GenreFilter onFilterChange={handleGenreChange} />

      <Row className="text-center mx-auto" >
        {movies.map(movie => (
          <Col md={2} key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <Card className="text-center mx-auto card text-bg-primary mb-3">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title className="text-center text-uppercase">{movie.title}</Card.Title>
                </Card.Body>
              </Card>
              <br></br>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;

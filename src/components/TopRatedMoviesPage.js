import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './css/TopRatedMoviesPage.css';

function TopRatedMoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=64937e8ca9376b0baf3db4a6b1b7087f')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="top-rated-movies-page">
      <h1 className="page-title">Films les mieux notés</h1>

      <Row className="movie-list">
        {movies.map(movie => (
          <Col md={3} key={movie.id}>
            <Card className="movie-card">
              <Card.Img className="movie-poster" variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <Card.Body>
                <Card.Title className="movie-title">{movie.title}</Card.Title>
                <Card.Text className="movie-overview">{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TopRatedMoviesPage;

import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=64937e8ca9376b0baf3db4a6b1b7087f')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <SearchBar setMovies={setMovies} />
      <GenreFilter setMovies={setMovies} />

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

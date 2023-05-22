    import React, { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';
    import { Card } from 'react-bootstrap';
    import './css/UpcomingMovies.css';

    function UpcomingMovies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUpcomingMovies();
    }, []);

    const fetchUpcomingMovies = async () => {
        try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=64937e8ca9376b0baf3db4a6b1b7087f');
        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false);
        } catch (error) {
        console.error(error);
        }
    };

    if (isLoading) {
        return (
        <div className="loading-container">
            <img className="loading-gif" src="/loading.gif" alt="Chargement..." />
        </div>
        );
    }

    return (
        <div className="up-container">
          <h1 className="up-page-title">Films à venir</h1>
    
          <div className="up-movie-grid">
            {movies.map(movie => (
              <Card key={movie.id} className="up-movie-card">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="up-movie-poster" />
                <Card.Body>
                  <Card.Title className="up-movie-title">{movie.title}</Card.Title>
                  <Card.Text className="up-movie-release-date">{movie.release_date}</Card.Text>
                  <Link to={`/detail/${movie.id}`} className="btn btn-primary">Voir les détails</Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      );
    }
    
    export default UpcomingMovies;
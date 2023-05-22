import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import './css/MoviesGenderList.css'; // Importer le fichier de style personnalisé

function MoviesGenderList() {
  const [genres, setGenres] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Récupérer la liste des genres
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=64937e8ca9376b0baf3db4a6b1b7087f')
      .then(response => response.json())
      .then(data => setGenres(data.genres))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    // Récupérer les films pour chaque genre
    const fetchMoviesByGenre = async (genreId) => {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=64937e8ca9376b0baf3db4a6b1b7087f&with_genres=${genreId}`);
      const data = await response.json();
      return data.results;
    };

    const fetchData = async () => {
      const genreMoviesData = [];
      for (const genre of genres) {
        const movies = await fetchMoviesByGenre(genre.id);
        genreMoviesData.push({ genre, movies });
      }
      setGenreMovies(genreMoviesData);
      setIsLoading(false); // Fin du chargement, affichage de la liste des films
    };

    setTimeout(() => {
      fetchData();
    }, 2000); // Temporisation de 2 secondes avant de charger les données
  }, [genres]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Card className="loading-card">
          <Card.Body className="loading-message">Chargement...</Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div className="custom-movies-gender-list-container">
      <h1 className="custom-page-title">Films par genre</h1>

      {genreMovies.map(({ genre, movies }) => (
        <div key={genre.id} className="custom-movies-gender-section">
          <h2 className="custom-genre-title">{genre.name}</h2>
          <div className="custom-movie-row">
            {movies.map(movie => (
              <Link to={`/detail/${movie.id}`} key={movie.id} className="custom-movie-card">
                <Card className="text-center">
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="custom-movie-poster" />
                  <Card.Body>
                    <Card.Title className="custom-movie-title">{movie.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesGenderList;
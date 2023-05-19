// Detail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MovieModal from './MovieModal'; // Assurez-vous d'importer correctement le composant MovieModal

function Detail() {
  const [movie, setMovie] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=64937e8ca9376b0baf3db4a6b1b7087f`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [id]);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>

      <Button variant="primary" onClick={handleShow}>
        Voir plus de détails
      </Button>

      <Link to="/">
        <Button variant="secondary" style={{ marginTop: '10px' }}>
          Retour à la page d'accueil
        </Button>
      </Link>

      <MovieModal movie={movie} show={modalShow} onHide={handleClose} />
    </div>
  );
}

export default Detail;

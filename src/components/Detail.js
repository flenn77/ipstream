import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Toast } from 'react-bootstrap';
import MovieModal from './MovieModal';
import './css/Detail.css';

function Detail() {
  const [movie, setMovie] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=64937e8ca9376b0baf3db4a6b1b7087f`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [id]);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(favMovie => favMovie.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setToastShow(true);
    }
  };

  return (
    <div className="detail-container">
      <h1 className="detail-title">{movie.title}</h1>
      <img className="detail-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <Button className="detail-button" variant="primary" onClick={handleShow}>
        Voir plus de détails
      </Button>
      <Button className="detail-button" variant="primary" onClick={addToFavorites}>
        Ajouter aux favoris
      </Button>
      <Link to="/" className="detail-link">
        Retour à la page d'accueil
      </Link>
      <MovieModal movie={movie} show={modalShow} onHide={handleClose} />
      <Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide style={{
        position: 'fixed',
        top: 20,
        right: 20,
        minWidth: 200
      }}>
        <Toast.Header>
          <strong className="mr-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>{`${movie.title} a été ajouté aux favoris.`}</Toast.Body>
      </Toast>
    </div>
  );
}

export default Detail;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './css/Favoris.css';

function Favoris() {
  const [favorites, setFavorites] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = (id) => {
    setSelectedMovieId(id);
    setModalShow(true);
  }

  const removeFavorite = () => {
    let newFavorites = favorites.filter((movie) => movie.id !== selectedMovieId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setModalShow(false);
  };

  return (
    <div className="favoris-container">
      <h1 className="favoris-title">Mes Favoris</h1>
      {favorites.map((movie) => (
        <div key={movie.id} className="d-flex align-items-center justify-content-between">
          <div className="p-2">
            <h4 className="mb-0">
              <Link to={`/detail/${movie.id}`} className="favoris-link">
                {movie.title}
              </Link>
            </h4>
          </div>
          <div className="p-2">
            <button 
              className="btn btn-danger"
              onClick={() => handleModalShow(movie.id)}>
              Supprimer
            </button>
          </div>
        </div>
      ))}
      <Link to="/" className="btn btn-primary mt-4">
        Retour à la page d'accueil
      </Link>

      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation de suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>Êtes-vous sûr de vouloir supprimer ce film de vos favoris ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Annuler
          </Button>
          <Button variant="danger" onClick={removeFavorite}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Favoris;

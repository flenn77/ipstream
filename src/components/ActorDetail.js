import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import './css/ActorDetail.css';

function ActorDetail() {
  const [actor, setActor] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=64937e8ca9376b0baf3db4a6b1b7087f`)
      .then(response => response.json())
      .then(data => setActor(data))
      .catch(error => console.error(error));
  }, [id]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div className="container text-center">
      <h1 className="actor-detail-title">{actor.name}</h1>
      <img className="actor-detail-image mx-auto" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
      <div className="actor-detail-info text-center">

      </div>
      <Button className="btn btn-primary" onClick={handleModalShow}>
        Voir plus de détails
      </Button>
      <p></p>
      <Link to="/" className="btn btn-danger actor-detail-link">
          Retour à la page d'accueil
      </Link>
      <br></br><br></br>
      <Modal show={showModal} onHide={handleModalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{actor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} className="modal-image mx-auto" />
          <p>Date de naissance : {actor.birthday}</p>
          <p>Lieu de naissance : {actor.place_of_birth}</p>
          <p>Biographie : {actor.biography}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ActorDetail;

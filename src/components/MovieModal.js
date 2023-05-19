// MovieModal.js
import { Modal, Button } from 'react-bootstrap';

function MovieModal({ movie, show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Vote Average</h4>
        <p>{movie.vote_average}</p>
        <h4>Release Date</h4>
        <p>{movie.release_date}</p>
        // Ajoutez ici plus de détails si vous le souhaitez...
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;

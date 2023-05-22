// MovieModal.js
import { Modal, Button, Row, Col } from 'react-bootstrap';

function MovieModal({ movie, show, onHide }) {
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="lg" 
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor: "#343a40", color: "white"}}>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor: "#6c757d", color: "white"}}>
        <Row>
          <Col><h4>Titre Original:</h4></Col>
          <Col><p>{movie.original_title}</p></Col>
        </Row>
        <Row>
          <Col><h4>Description :</h4></Col>
          <Col><p>{movie.overview}</p></Col>
        </Row>
        <Row>
          <Col><h4>Vote Average:</h4></Col>
          <Col><p>{movie.vote_average}</p></Col>
        </Row>
        <Row>
          <Col><h4>Décompte des votes :</h4></Col>
          <Col><p>{movie.vote_count}</p></Col>
        </Row>
        <Row>
          <Col><h4>Date de sortie:</h4></Col>
          <Col><p>{movie.release_date}</p></Col>
        </Row>
        <Row>
          <Col><h4>Popularité:</h4></Col>
          <Col><p>{movie.popularity}</p></Col>
        </Row>
        <Row>
          <Col><h4>Langue originale:</h4></Col>
          <Col><p>{movie.original_language}</p></Col>
        </Row>
        <Row>
          <Col><h4>Budget:</h4></Col>
          <Col><p>{movie.budget}</p></Col>
        </Row>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: "#343a40"}}>
        <Button variant="secondary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;

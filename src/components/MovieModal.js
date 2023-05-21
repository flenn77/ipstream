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
          <Col><h4>Original Title:</h4></Col>
          <Col><p>{movie.original_title}</p></Col>
        </Row>
        <Row>
          <Col><h4>Overview:</h4></Col>
          <Col><p>{movie.overview}</p></Col>
        </Row>
        <Row>
          <Col><h4>Vote Average:</h4></Col>
          <Col><p>{movie.vote_average}</p></Col>
        </Row>
        <Row>
          <Col><h4>Vote Count:</h4></Col>
          <Col><p>{movie.vote_count}</p></Col>
        </Row>
        <Row>
          <Col><h4>Release Date:</h4></Col>
          <Col><p>{movie.release_date}</p></Col>
        </Row>
        <Row>
          <Col><h4>Popularity:</h4></Col>
          <Col><p>{movie.popularity}</p></Col>
        </Row>
        <Row>
          <Col><h4>Original Language:</h4></Col>
          <Col><p>{movie.original_language}</p></Col>
        </Row>
        <Row>
          <Col><h4>Budget:</h4></Col>
          <Col><p>{movie.budget}</p></Col>
        </Row>
        {/* Add more details as needed... */}
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: "#343a40"}}>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;

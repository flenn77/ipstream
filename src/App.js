import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import Detail from './components/Detail';
import TopRatedMoviesPage from './components/TopRatedMoviesPage';
import './App.css';



function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Accueil</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/top-rated">Films les mieux notés</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/top-rated">Films les mieux notés</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/top-rated" element={<TopRatedMoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

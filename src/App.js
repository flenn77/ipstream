import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import Detail from './components/Detail';
import TopRatedMoviesPage from './components/TopRatedMoviesPage';
import './App.css';
import MoviesGenderList from './components/MoviesGenderList';
import Favorites from './components/Favorites';
import UpcomingMovies from './components/UpcomingMovies';
import ActorDetail from './components/ActorDetail';



function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
          <img src="/Ipstream.png" alt="Logo" className="navbar-logo" />
     
        </Navbar.Brand>      
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Home">Acceuil</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/GenderMovies">Films par genre</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Sortie">Films à venir</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/top-rated">Films les mieux notés</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/favorites">Favoris</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/top-rated" element={<TopRatedMoviesPage />} />
        <Route path="/GenderMovies" element={<MoviesGenderList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Sortie" element={<UpcomingMovies />} />
        <Route path="/actor/:id" element={<ActorDetail />} />



      </Routes>
    </Router>
  );
}

export default App;

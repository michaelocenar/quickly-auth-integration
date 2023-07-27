import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';


const App = () => {
  return (
    <Router>
      <Container>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand mb-0 h1 custom-title">Quickly</span>
        </nav>
        <div className="d-flex justify-content-center align-items-center custom-container">
          <div className="m-3">
            <Link to="/login" className="custom-button">
              <Button variant="outline-primary" size="lg">Login</Button>
            </Link>
          </div>
          <div className="m-3">
            <Link to="/signup" className="custom-button">
              <Button variant="outline-secondary" size="lg">Signup</Button>
            </Link>
          </div>
          <div className="m-3">
            <Link to="/profile" className="custom-button">
              <Button variant="outline-success" size="lg">Profile</Button>
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;


import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <Router>
      <Container>
        <div>
          <nav>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;

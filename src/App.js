import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';



function App() {
  return (
    <Login />
  );
}

export default App;

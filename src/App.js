import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <nav>
        <ul><Link to="/header">Header</Link></ul> 
        <ul><Link to="/main">MainContent</Link> </ul>
        <ul><Link to="/footer">Footer</Link> </ul>
      </nav>
      
      <Route path="/header"><Header /></Route>
      <Route path="/main"><MainContent /></Route>
      <Route path="/footer"><Footer /></Route>
    </Router>
  );
}

export default App;

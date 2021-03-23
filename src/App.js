import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Aside from './components/Aside';

function App() {
  return (
    <Router>
      <Header />
      <Aside />
      <MainContent />
      <Footer />
    </Router>
  );
}

export default App;

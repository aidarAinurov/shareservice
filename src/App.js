import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Header from './components/Header/index';
import MainContent from './components/MainContent/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <Router>
      <div>main page</div>
      <Route path="/header"><Header /></Route>
      <Route path="/main"><MainContent /></Route>
      <Route path="/footer"><Footer /></Route>
    </Router>
  );
}

export default App;

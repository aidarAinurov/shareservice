import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dashboard from './Dashboard/index.jsx';
import Home from './Home/index.jsx';
import Profile from './Profile/index.jsx';

function MainContent() {
    return (
        <Router>
            <h1>Main Content</h1>
            <Route><Dashboard /></Route>
            <Route><Home /></Route>
            <Route><Profile /></Route> 
        </Router>
    );
}

export default MainContent;
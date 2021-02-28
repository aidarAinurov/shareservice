import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';
import Profile from './Profile';

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
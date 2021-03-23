import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';

function MainContent() {
    return (
        <Router>
            <Route><Dashboard /></Route>
            <Route><Home /></Route>
        </Router>
    );
}

export default MainContent;
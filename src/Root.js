import React from 'react';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";
import App from './App.js';
import Projects from './views/projects.js';
import Commercial from './views/commercial.js';
import Aboutme from './views/aboutme';

const Root = (props) => (
    <Router>
        <Switch>
            <Route path="/personalprojects">
                <Projects />
            </Route>
            <Route path="/commercialprojects">
                <Commercial />
            </Route>
            <Route path="/aboutme">
                <Aboutme />
            </Route>
            <Route path="/" exact>
                <App />
            </Route>
        </Switch> 
    </Router>
);


export default Root;
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../home";
import Results from "../results";

const Dome = () => {
    return (
        <Router>
            <Route path="/" exact >
                <Home />
            </Route>
            <Route path="/resultados" exact >
                <Results />
            </Route>
        </Router>
    );
};

export default Dome;
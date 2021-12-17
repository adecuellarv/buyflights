import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Header from "../common";
import Home from "../home";
import Results from "../results";

import { setCities } from "../../store/actions/cities";
import { getCities } from "../../rest/cities";

const Dome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        funcGetCities();
    }, []);
    const funcGetCities = async () => {
        const resp = await getCities();
        dispatch(setCities(resp));
    };
    return (
        <Router>
            <Header />
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
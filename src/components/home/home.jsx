import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCities } from "../../store/actions/cities";
import { getCities } from "../../rest/cities";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        funcGetCities();
    }, []);

    const funcGetCities = async () => {
        const resp = await getCities();
        dispatch(setCities(resp));
    };
    return (<h1>Home</h1>);
};

export default Home;
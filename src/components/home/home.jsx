import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCities } from "../../store/actions/cities";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(setCities({
                id: 1,
                name: 'MX'
            }));
        }, 800);
    }, []);
    return (<h1>Home</h1>);
};

export default Home;
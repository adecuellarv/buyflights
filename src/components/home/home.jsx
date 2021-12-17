import React, { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { setCities } from "../../store/actions/cities";
import { getCities } from "../../rest/cities";

const Home = ({ flightsInfo }) => { console.log('flightsInfo', flightsInfo)
    const dispatch = useDispatch();
    useEffect(() => {
        //funcGetCities();
    }, []);

    const funcGetCities = async () => {
        const resp = await getCities();
        dispatch(setCities(resp));
    };
    return (<h1>Home</h1>);
};

const mapStateToProps = state => {
    return {
        flightsInfo: state.flightsInfo
    };
};
export default connect(mapStateToProps)(Home);
import React, { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Form from "./form";
import Slider from "./slider";
import { setCities } from "../../store/actions/cities";
import { getCities } from "../../rest/cities";

const Home = ({ flightsInfo }) => {
    console.log('flightsInfo', flightsInfo)
    const dispatch = useDispatch();
    useEffect(() => {
        //funcGetCities();
    }, []);

    const funcGetCities = async () => {
        const resp = await getCities();
        dispatch(setCities(resp));
    };
    return (
        <>
            <div className="row">
                <div className="col-9">
                    <Form flightsInfo={flightsInfo} />
                </div>
                <div className="col-3">
                    <Slider />
                </div>
            </div>

        </>
    );
};

Home.propTypes = {
    flightsInfo: PropTypes.object
};

const mapStateToProps = state => {
    return {
        flightsInfo: state.flightsInfo
    };
};
export default connect(mapStateToProps)(Home);
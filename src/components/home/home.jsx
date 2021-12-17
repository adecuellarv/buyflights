import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from "./form";
import Slider from "./slider";

const Home = ({ flightsInfo }) => {
    return (
        <>
            <div className="row">
                <div className="col-9 md-col-12">
                    <Form flightsInfo={flightsInfo} />
                </div>
                <div className="col-3 md-hide">
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
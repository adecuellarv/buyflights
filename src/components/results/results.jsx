import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sliderbar from "./sliderbar";
import Search from "./search";
import List from "./list";
import './styles.scss';

const Results = ({ flightsInfo }) => {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <Sliderbar />
                </div>
                <div className="col-10">
                    <div className="column-right-results">
                        <Search flightsInfo={flightsInfo} />
                        <List flightsInfo={flightsInfo} />
                    </div>
                </div>
            </div>
        </>
    );
};

Results.propTypes = {
    flightsInfo: PropTypes.object
};

const mapStateToProps = state => {
    return {
        flightsInfo: state.flightsInfo
    };
};

export default connect(mapStateToProps)(Results);
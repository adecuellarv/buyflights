import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import queryString from 'query-string';
import idx from "idx";
import { getSchedule } from './function';

import './styles.scss';

const List = ({ match, location, flightsInfo }) => {
    const [infoSearch, setInfoSearch] = useState({});
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const qst = queryString.parse(location.search);
        setInfoSearch(qst);
        if (qst && idx(flightsInfo, _ => _.cities.length)) {
            setSchedule(getSchedule(flightsInfo.cities, infoSearch));
        }
    }, [match, location, flightsInfo]);

    const addItem = () => {

    };

    console.log('schedule', schedule)
    return (
        <div className="div-list">
            <h1>Resultados</h1>
            <div className="row">
                {idx(schedule, _ => _.schedule.length) && schedule.schedule.map((item, key) =>
                    <div className="col-4 sm-col-12">
                        <div className="card-schedule">
                            <div className="card-shadow">

                                <div className="div-depart">
                                    <strong>Salida: </strong>
                                    <span><strong>{item.depart.date}</strong> {item.depart.time}</span>
                                </div>
                                <div className="div-depart">
                                    <strong>Llegada: </strong>
                                    <span><strong>{item.arrive.date}</strong> {item.arrive.time}</span>
                                </div>
                                <div className="div-price">
                                    <div>
                                        <label>${item.price} MXN</label>
                                    </div>
                                    <button className="button-form" onClick={addItem}>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

List.propTypes = {
    flightsInfo: PropTypes.object
};

export default withRouter(List);
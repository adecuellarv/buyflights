import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import queryString from 'query-string';
import idx from "idx";
import { searchCompatibleCities } from '../../../functions/search';
import './styles.scss';

let infoSearch = {};
const Search = ({ match, location, flightsInfo }) => {
    const [compatiblesCities, setCompatiblesCities] = useState([]);
    const [showPeopleForm, setShowPeopleForm] = useState(false);
    const [countPeople, setCountPeople] = useState(parseInt(infoSearch.people));
    const history = useHistory();

    useEffect(() => {
        const qst = queryString.parse(location.search);
        if (flightsInfo.cities.length && qst.from && qst.to && qst.people) {
            infoSearch = qst;
            setCountPeople(parseInt(qst.people));
            const resp = searchCompatibleCities(flightsInfo.cities, infoSearch.from);
            if (resp) setCompatiblesCities(resp);
        }
    }, [match, location, flightsInfo]);

    const changeFROM = (e) => {
        const value = e.target.value;
        if (value !== '0') {
            infoSearch.from = value;
            const resp = searchCompatibleCities(flightsInfo.cities, value);
            if (resp) setCompatiblesCities(resp);
        }
    };

    const changeTO = (e) => {
        const value = e.target.value;
        if (value !== '0') {
            infoSearch.to = value;
        }
    };

    const changePeopleCount = (type) => {
        if (type === 'rest' && countPeople > 1) {
            setCountPeople(countPeople - 1);
            infoSearch.people = countPeople - 1;
        } else if (type === 'add') {
            setCountPeople(countPeople + 1);
            infoSearch.people = countPeople + 1;
        }
    };

    const showResults = () => {
        if (infoSearch.from && infoSearch.to && infoSearch.people) {
            history.push(`/resultados?from=${infoSearch.from}&to=${infoSearch.to}&people=${infoSearch.people}`);
        }
    };

    return (
        <div className="card-shadow">
            <div className="search-div">
                <h1>Busqueda</h1>
                <div className="row">
                    <div className="col-6 sm-col-12">
                        <div className="component-form-search">
                            <label className="label-form-search">Origen</label>
                            <select
                                onChange={changeFROM}
                                value={infoSearch.from}
                                className="select-form">
                                <option value="0">Selecciona...</option>
                                {idx(flightsInfo, _ => _.cities.length) && flightsInfo.cities.map((item, key) =>
                                    <option key={key} value={item.id}>{item.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="col-6 sm-col-12">
                        <div className="component-form-search">
                            <label className="label-form-search">Destino</label>
                            <select
                                onChange={changeTO}
                                value={infoSearch.to}
                                className="select-form">
                                <option value="0">Selecciona...</option>
                                {compatiblesCities.length && compatiblesCities.map((item, key) =>
                                    <option key={key} value={item.id}>{item.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="col-6 sm-col-12">
                        <label className="label-form label-form-white">¿Cuantas personas?</label>
                        <div className="div-people" >
                            <label onClick={() => setShowPeopleForm(!showPeopleForm)}>{countPeople} Persona</label>
                            {showPeopleForm &&
                                <div className="div-form-people">
                                    <div onClick={() => setShowPeopleForm(false)}
                                        className="close-div-form"><label>Cerrar X</label></div>
                                    <div className="row">
                                        <div className="col-4">
                                            <button
                                                className="btn-people-form"
                                                onClick={() => changePeopleCount('rest')}>-</button>
                                        </div>
                                        <div className="col-4">
                                            <label className="labe-people-form">{countPeople}</label>
                                        </div>
                                        <div className="col-4">
                                            <button
                                                className="btn-people-form"
                                                onClick={() => changePeopleCount('add')}>+</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-6 sm-col-12">
                        <div className="div-btn-form-search">
                            <button className="button-form" onClick={showResults}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Search.propTypes = {
    flightsInfo: PropTypes.object
};

export default withRouter(Search);
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import idx from "idx";
import { searchCompatibleCities } from '../../../functions/search';
import './styles.scss';

const infoSearch = {
    from: '',
    to: '',
    people: 1
};
const Form = ({ flightsInfo }) => {
    const [compatiblesCities, setCompatiblesCities] = useState([]);
    const [showPeopleForm, setShowPeopleForm] = useState(false);
    const [countPeople, setCountPeople] = useState(infoSearch.people);
    const history = useHistory();

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

    const goTOResults = () => {
        if(infoSearch.from && infoSearch.to && infoSearch.people){
            history.push(`/resultados?from=${infoSearch.from}&to=${infoSearch.to}&people=${infoSearch.people}`);
        }
    };

    return (
        <div className="div-bgform">
            <div className="div-form">
                <h1 className="title-form">Descrube tu nuevo destino</h1>
                <h2 className="subtitle-form">¿A donde te gustaría ir?</h2>
                <div className="section-form">
                    <label className="label-form label-form-white">Origen</label>
                    <select onChange={changeFROM} className="select-form">
                        <option value="0">Selecciona...</option>
                        {idx(flightsInfo, _ => _.cities.length) && flightsInfo.cities.map((item, key) =>
                            <option key={key} value={item.id}>{item.name}</option>
                        )}
                    </select>
                </div>
                <div className="section-form">
                    <label className="label-form label-form-white">Destino</label>
                    <select onChange={changeTO} className="select-form" disabled={!compatiblesCities.length}>
                        <option value="0">Selecciona...</option>
                        {compatiblesCities.length && compatiblesCities.map((item, key) =>
                            <option key={key} value={item.id}>{item.name}</option>
                        )}
                    </select>
                </div>
                <div className="section-form">
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
                <div className="div-btn-form">
                    <button className="button-form" onClick={goTOResults}>Buscar</button>
                </div>
            </div>
        </div>
    )
};

Form.propTypes = {
    flightsInfo: PropTypes.object
};

export default withRouter(Form);
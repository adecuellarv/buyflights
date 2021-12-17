import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

const Form = ({ flightsInfo }) => {
    return (
        <div className="div-bgform">
            <div className="div-form">
                <h1 className="title-form">Descrube tu nuevo destino</h1>
                <h2 className="subtitle-form">¿A donde te gustaría ir?</h2>
                <div className="section-form">
                    <label className="label-form label-form-white">Origen</label>
                    <select className="select-form">
                        <option>Selecciona...</option>
                        <option>1</option>
                    </select>
                </div>
                <div className="section-form">
                    <label className="label-form label-form-white">Destino</label>
                    <select className="select-form" disabled={true}>
                        <option>Selecciona...</option>
                        <option>1</option>
                    </select>
                </div>
                <div className="section-form">
                    <label className="label-form label-form-white">¿Cuantas personas?</label>
                    <div className="div-people"><label>1 Persona</label></div>
                </div>
                <div className="div-btn-form">
                    <button className="button-form">Buscar</button>
                </div>
            </div>
        </div>
    )
};

Form.propTypes = {
    flightsInfo: PropTypes.object
};

export default Form;
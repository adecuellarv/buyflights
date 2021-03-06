import React from "react";
import { Link } from "react-router-dom";
import loading from './img/success.gif';

import './styles.scss';
import './success.scss';

const Modal = ({ title, description, linkInfo, showModal, showSecondLink = true }) => {
    return (
        <>
            <div className="modal-cap" onClick={() => showModal(false)} />
            <div className="modal-div">
                <h1>{title}</h1>
                <div className="success-checkmark">
                    <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>
                <p>{description}</p>
                <div className="links-modal">
                    {showSecondLink &&
                        <Link className="link-back-home" to="/">Regresar a Inicio</Link>
                    }
                    <Link to={linkInfo.link}><button className="btn-link-modal">{linkInfo.text}</button></Link>
                </div>
            </div>
        </>
    );
};

export default Modal;
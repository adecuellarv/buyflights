import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import './styles.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="div-home-hd">
                <Link to="/">Inicio</Link>
            </div>
            <div className="cart-div">
                <FontAwesomeIcon icon={faShoppingBag} className="icon-cart-hd" />
            </div>
        </div>
    )
};

export default Header;
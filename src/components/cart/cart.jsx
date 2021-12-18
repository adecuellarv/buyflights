import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import idx from "idx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { getCart, deleteItemCart } from "../../functions/cart";
import { getCity, getTotal } from "./functions";

import './styles.scss';



const Cart = ({ flightsInfo }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const resp = getCart();
        if (idx(flightsInfo, _ => _.cities.length) && resp)
            setItems(resp);
    }, [flightsInfo]);

    const getNameCity = (id) => {
        const resp = getCity(flightsInfo.cities, id);
        if (resp.name) return resp.name;
    };

    const deleteItem = (itemInfo) => {
        deleteItemCart(itemInfo);
        setItems(getCart());
    };

    return (
        <div className="div-cart">
            <div className="card-shadow">
                <h1>Mis reservas.</h1>
                <div className="div-listcart">
                    {!!items.length ? items.map((item, key) =>
                        <div className="item-cart" key={key}>
                            <div className="row">

                                <div className="col-8">
                                    <label className="where-info">{getNameCity(item.from)} - {getNameCity(item.to)}</label>
                                    <div className="div-sched-info">
                                        <label className="sched-info"><strong>Salida: </strong>{item.depart.date} {item.depart.time}</label>
                                    </div>
                                    <div className="div-sched-info">
                                        <label className="sched-info"><strong>Llegada: </strong>{item.arrive.date} {item.arrive.time}</label>
                                    </div>
                                    <div className="div-sched-info">
                                        <label className="sched-info"><strong>Personas: </strong>{item.people}</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="div-price">
                                        ${item.price} MXN
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="div-delete-item">
                                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteItem(item)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <div>
                        <h4>No tienes aún ninguna reserva</h4>
                    </div>}
                    {getTotal(items) > 0 &&
                        <div>
                            <div className="item-cart">
                                <div className="row">
                                    <div className="col-8 div-text-total">
                                        <strong>Total</strong>
                                    </div>
                                    <div className="col-3 div-total">
                                        <label>${getTotal(items)} MXN</label>
                                    </div>
                                </div>
                            </div>


                            <div className="div-btn-checkoutcart">
                                <button className="button-form"
                                ><Link to="/finalizar">Reservar</Link></button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

Cart.propTypes = {
    flightsInfo: PropTypes.object
};

const mapStateToProps = state => {
    return {
        flightsInfo: state.flightsInfo
    };
};

export default connect(mapStateToProps)(Cart);
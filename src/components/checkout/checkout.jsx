import React, { useEffect, useState } from "react";
import Modal from "../common/modal";
import { getCart, clearCart } from "../../functions/cart";

import './styles.scss';


const Checkout = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const resp = getCart();
        if (resp)
            setItems(resp);
    }, []);

    const saveData = () => {
        setShowModal(true);
        clearCart();
        setItems(getCart());
    };

    return (
        <div className="div-cart">
            <div className="card-shadow">
                <h1>Checkout.</h1>
                <div className="div-listcart">
                    {!!items.length ?
                        <div className="row">
                            <div className="col-12">
                                <div className="section-form">
                                    <label className="label-form">Nombre</label>
                                    <div className="col-12">
                                        <input
                                            className="input-form"
                                            type="text"
                                            placeholder="Escribe Nombre Completo"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="section-form">
                                    <label className="label-form">Apellidos</label>
                                    <div className="col-12">
                                        <input
                                            className="input-form"
                                            type="text"
                                            placeholder="Escribe Apellidos"
                                            onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="section-form">
                                    <label className="label-form">Dirección</label>
                                    <div className="col-12">
                                        <input
                                            className="input-form"
                                            type="text"
                                            placeholder="Escribe Dirección"
                                            onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="section-form">
                                    <label className="label-form">Email</label>
                                    <div className="col-12">
                                        <input
                                            className="input-form"
                                            type="text"
                                            placeholder="Escribe Email"
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="section-form">
                                    <div className="div-btn-checkoutcart">
                                        <button
                                            disabled={!name || !lastName || !address || !email}
                                            onClick={saveData}
                                            style={{background: !name || !lastName || !address || !email ? '#eee' : '#e3b21e'}}
                                        >Finalizar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div>
                            <h4>No tienes aún ninguna reserva para hacer checkout</h4>
                        </div>}
                </div>
            </div>
            {showModal &&
                <Modal
                    title={"Datos guardados"}
                    linkInfo={{
                        text: "Ir a home",
                        link: "/"
                    }}
                    showModal={setShowModal}
                    showSecondLink={false}
                />
            }
        </div>
    )
};


export default Checkout;
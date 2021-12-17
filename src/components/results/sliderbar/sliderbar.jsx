import React from "react";
import './styles.scss';

const Sliderbar = () => {
    return (
        <div className="bg-div-filter">
            <h1>Filtros</h1>
            <span>(No hacen nada)</span>
            <div className="container-filter">
                <div className="group-filter">
                    <div className="father-filter">
                        <label>Filter title</label>
                        <div className="childrens-filters">
                            <label>Filter 1</label>
                            <label>Filter 2</label>
                            <label>Filter 3</label>
                        </div>
                    </div>
                </div>
                <div className="group-filter">
                    <div className="father-filter">
                        <label>Filter title</label>
                        <div className="childrens-filters">
                            <label>Filter 1</label>
                            <label>Filter 2</label>
                            <label>Filter 3</label>
                        </div>
                    </div>
                </div>
                <div className="group-filter">
                    <div className="father-filter">
                        <label>Filter title</label>
                        <div className="childrens-filters">
                            <label>Filter 1</label>
                            <label>Filter 2</label>
                            <label>Filter 3</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Sliderbar;
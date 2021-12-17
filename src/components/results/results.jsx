import React from "react";
import Sliderbar from "./sliderbar";
import Search from "./search";
import List from "./list";

const Results = () => {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <Sliderbar />
                </div>
                <div className="col-10">
                    <Search />
                    <List />
                </div>
            </div>
        </>
    );
};

export default Results;
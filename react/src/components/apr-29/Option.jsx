import React from "react";
import "./Option.css";

function Option(props) {
    console.log("props from app file",props);
    return(
        <div>
            <h2 className="option">My Option component</h2>
        </div>
    )
}

export default Option;
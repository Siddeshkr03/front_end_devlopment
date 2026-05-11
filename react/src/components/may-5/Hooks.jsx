// Why Hooks in ReactJS?

// To add the features present in the class components to the functional components,
//Hooks was introduced

// useState Hook

import React, { useState } from "react";

function Hooks() {
    // name is the variable name given to the userinput string "Dream"
    // setName is the function associated with the variable name to set/change it's value when needed.
    // Syntax:
    // variable name: Dark
    // method associated name: setDark
    const [name,setName] = useState("Dream");

    // const handleClick = () => {
    //     setName("Nightmare");
    // };
    return(
        <div>
            <h1>Hello : {name}</h1>
            {/* Without using a separate function */}
            <button onClick={() => setName("Night")}>Click</button>
        </div>
    );
}

export default Hooks;
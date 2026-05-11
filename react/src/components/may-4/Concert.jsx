import React from "react";

function Concert() {

    // The below code is how you define a function for onClick property of button tag in class components
    // handleClick(){
    //     console.log("Function button clicked.");
    // }


    // For functional components:
    const handleClick = () => {
        console.log("Function button clicked...");
    };

    return(
        <div>
            <button onClick={handleClick}>Function Button</button>
        </div>
    )
}

export default Concert;
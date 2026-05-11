import React from "react";
import SecondCode from "./SecondCode";
import ThirdCode from "./ThirdCode";

function FirstCode({name}) {
    // console.log("props value is ",props);
    // const { name } = props;
    // in the above line we are using destructuring to get the name value from props 
    // object and we are using it in the h1 tag to display the name value in the output.
     return (
        // <div>
        //     <h1>My First React component: {name}</h1>
        //     <SecondCode />
        //     <ThirdCode />
        // </div>
        <h1 className="heading">My first first code {name} </h1>
    );
}

export default FirstCode;


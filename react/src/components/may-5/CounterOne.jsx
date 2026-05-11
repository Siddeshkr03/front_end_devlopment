import React, { useState } from "react";
import './CounterOne.css';

function CounterOne(){
    // Can we define only the variable name and not mention the set variable name method?
    // Yes, the code still works as long as you don't use setCounter method 
    // Eg: const [counter] = useState(0);
    // but when you do this 
    // Eg: const counter = useState(0);
    // useState returns an array of [value,updateFunction], so the recommended way is defined below
    const [counter,setCounter] = useState(0);

    return(
        <div>
            <h3>Count: {counter}</h3>
            <button className="btn" onClick={()=> setCounter(counter + 1)}>Increment</button>
            <button className="btn" onClick={()=> setCounter(counter - 1)}>Decrement</button>
            <button className="btn" onClick={() => setCounter(0)}>Reset</button>
        </div>
    )
}

export default CounterOne;
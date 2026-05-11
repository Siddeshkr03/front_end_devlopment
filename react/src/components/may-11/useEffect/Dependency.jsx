
import React, {useState,useEffect} from "react";

const Dependency = () => {
  const [count, setCount] = useState(0);
  const [calculate, setCalculate] = useState();

  useEffect(()=>{
    setCalculate(count * 2);
  }, [count]) // useEffect 

  const handleCLick = () => {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h1>Count value: {count}</h1>
      <h3>Calculate value: {calculate}</h3>
      <button onClick={handleCLick}>Click</button>
    </div>
  );
};

export default Dependency;
import React, {useState,useEffect} from "react";

const OnlyOnce = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // useEffect block will run only once

  return (
    <div>
      <h1>Count value: {count}</h1>
    </div>
  );
};

export default OnlyOnce;

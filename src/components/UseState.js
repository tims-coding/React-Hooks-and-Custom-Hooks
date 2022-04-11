import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="state-content">
      <h2>useState</h2>
      <h3>{counter}</h3>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default UseState;

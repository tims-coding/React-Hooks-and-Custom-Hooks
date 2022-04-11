import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [changed, setChanged] = useState(0);
  const [name, setName] = useState("");
  const updateChange = () => {
    setChanged((currentChanged) => currentChanged + 1);
  };
  const reset = () => {
    setChanged(0);
  };
  useEffect(() => {
    updateChange();
  }, [name]);
  return (
    <div className="effect-content">
      <h2>useEffect</h2>
      <h3>Changed {changed} times</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseEffect;

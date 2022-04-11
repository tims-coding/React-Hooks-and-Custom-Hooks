import React from "react";
import useToggle from "../hooks/useToggle";

const UseCustom = () => {
  const [toggle, setToggle] = useToggle(false);
  return (
    <div className="custom-content">
      <h2>Custom Hook useToggle</h2>
      <h3>{toggle.toString()}</h3>
      <button onClick={setToggle}>Toggle</button>
      <button onClick={() => setToggle(true)}>Set True</button>
      <button onClick={() => setToggle(false)}>Set False</button>
    </div>
  );
};

export default UseCustom;

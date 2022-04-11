import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const UseCustom2 = () => {
  const [word] = useState(10);
  const handleChange = (event) => {
    alert(`You typed ${event.target.value}`);
  };
  const optimizedFunc = useDebounce(handleChange);

  return (
    <div className="custom2-content">
      <h2>Custom Hook useDebounce</h2>
      <h3>{word}</h3>
      <input type="text" onChange={optimizedFunc} />
    </div>
  );
};

export default UseCustom2;

import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "TOGGLE":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div className="reducer-content">
      <h2>useReducer</h2>
      {state.showText && <h3>{state.count}</h3>}
      <button
        onClick={() => {
          dispatch({ type: "TOGGLE" });
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increase and Toggle
      </button>
    </div>
  );
};

export default UseReducer;

import React, { useRef, useEffect } from "react";

const UseRef = () => {
  const commentRef = useRef();

  useEffect(() => {
    commentRef.current.focus();
  });
  return (
    <div className="ref-content">
      <h2>useRef</h2>
      <p>
        focuses on input using a reference from useRef and starts focus on first
        render using useEffect
      </p>
      <input type="text" ref={commentRef} />
    </div>
  );
};

export default UseRef;

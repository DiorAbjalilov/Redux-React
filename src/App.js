import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispach = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>
        {count} <button onClick={() => dispach({ type: "qush" })}>sfos</button>
      </h2>
    </div>
  );
}

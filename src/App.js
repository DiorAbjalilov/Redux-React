import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispach = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispach({ type: "qush" })}>qo'sh</button>
      <button onClick={() => dispach({ type: "ayir" })}>ayir</button>
      <button onClick={() => dispach({ type: "uchir" })}>o'chir</button>
    </div>
  );
}

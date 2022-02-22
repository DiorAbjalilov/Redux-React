import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const initialState = {
  counter:0,
};
export default function App() {
  const [value, setValue]=useState('')
  const dispach = useDispatch();
  const counter = useSelector(state=>state);
  console.log(counter);
  const HandlerClick=()=>{
    return dispach({ type: "Increment", payload: value})
  }
  return (
    <div>
      <input type='text' onChange={(e)=>setValue(e.target.value)} value={value} />
      <button onClick={HandlerClick}>Enter</button>
      {/* <button onClick={() => dispach({ type: "Clear" })}>Clear</button> */}
      {/* <button onClick={() => dispach({ type: "Decrement" })}>Decrement</button> */}
    </div>
  );
}

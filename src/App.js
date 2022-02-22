import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const [value, setValue]=useState('')
  const dispach = useDispatch();
  const counter = useSelector(state=>state);
  console.log(counter);
  const HandlerClick=(e)=>{
    if(e.key==='Enter'){
      dispach({ type: "Increment", payload: value})
      setValue('')
    }
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e)=>HandlerClick(e)}
        value={value}
      />
      {/* <button onClick={HandlerClick}>Enter</button> */}
      {/* <button onClick={() => dispach({ type: "Clear" })}>Clear</button> */}
      {/* <button onClick={() => dispach({ type: "Decrement" })}>Decrement</button> */}
    </div>
  );
}

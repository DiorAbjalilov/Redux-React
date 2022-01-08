import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const initialState = {
  name: "salom",
};
export default function App() {
  const dispach = useDispatch();
  const [text, setText] = useState("");
  const value = useSelector((state) => state.name);
  const ChangHandle = (e) => setText(e.target.value);
  const OnKeyPres = (e) => {
    const valueText = e.target.value.trim();
    if (e.key == "Enter") {
      dispach({ type: "Enter", payload: valueText });
      setText("");
    }
  };
  // console.log(text);
  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        value={text}
        onChange={ChangHandle}
        onKeyPress={OnKeyPres}
      />
      <button>ok</button>
      {/* <button onClick={() => dispach({ type: "uchir" })}>o'chir</button> */}
    </div>
  );
}

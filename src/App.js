import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { counterAction } from "./redux/action/actions";

export default () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch(counterAction.increment())}>
        increment
      </button>
      <button onClick={() => dispatch(counterAction.decrement())}>
        decrement
      </button>
      <button onClick={() => dispatch(counterAction.delete())}>delete</button>
    </>
  );
};

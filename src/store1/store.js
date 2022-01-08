import { createStore } from "redux";
import counterReduser from "./counterReduser";

export default createStore(
  counterReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

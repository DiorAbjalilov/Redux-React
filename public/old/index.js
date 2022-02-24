import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./old/store/store";
import App from "./App";


const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(app, document.getElementById("root"));
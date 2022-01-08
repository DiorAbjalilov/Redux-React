import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(app, document.getElementById("root"));

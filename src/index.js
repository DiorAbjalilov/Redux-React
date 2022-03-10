import React from "react";
import { render } from "react-dom";
import App from "./App";
import CartState from "./components/content/cart/CartState";
const app = (
  <CartState>
    <App />
  </CartState>
);
render(app, document.getElementById("root"));

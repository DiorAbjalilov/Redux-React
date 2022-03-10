import React from "react";
import Cart from "./cart/Cart";
import HomeScreen from "./Home/HomeScreen";
import Navbar from "./Navbar/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <HomeScreen />
    </>
  );
};

export default index;

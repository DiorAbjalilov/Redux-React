import React from "react";
import products from "../data/data";
import ProductCard from "../Products/ProductCard";
import "./HomeScreenStyle.css";
const HomeScreen = () => {
  return (
    <>
      <div className="products__wrapper">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </>
  );
};

export default HomeScreen;

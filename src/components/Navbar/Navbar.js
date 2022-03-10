import React from "react";
import CartContext from "../content/cart/CartContext";
import { useContext } from "react";
import "./Navbar.css";
const Navbar = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  return (
    <>
      <nav>
        <div className="nav__left">Store</div>
        <div className="nav__middle">
          <div className="input__wrapper">
            <input type="text" />
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="nav__right">
          <div className="cart__icon">
            <i
              className="fa fa-shopping-cart"
              aria-hidden="true"
              onClick={showHideCart}
            />
            {cartItems.length > 0 && (
              <div className="item__count">
                <span>{cartItems.length}</span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

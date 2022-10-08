import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import HeaderCartButtonCSS from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [buttonUpdate, setButtonUpdate] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${HeaderCartButtonCSS.button} ${
    buttonUpdate ? HeaderCartButtonCSS.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonUpdate(true);

    const timer = setTimeout(() => {
      setButtonUpdate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={HeaderCartButtonCSS.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={HeaderCartButtonCSS.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;

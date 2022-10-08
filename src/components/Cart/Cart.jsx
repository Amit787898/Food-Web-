import React, { useContext } from "react";
import Modal from "../UI/Modal";
import cartCss from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id);
  }

  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItem = (
    <ul className={cartCss["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={cartCss.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={cartCss.actions}>
        <button className={cartCss["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={cartCss.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

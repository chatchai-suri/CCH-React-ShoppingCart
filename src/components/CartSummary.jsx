import _React from "react";
import CartItem from "./CartItem";

function CartSummary(props) {
  // ------ JS area ------
  const {carts} = props

  // ------ JSX area ------
  return (
    <div className="w-1/3 bg-orange-300">
      <h2>Cart Items:</h2>
      <CartItem />
    </div>
  );
}

export default CartSummary;

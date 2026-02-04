import _React from "react";
import CartItem from "./CartItem";

function CartSummary(props) {
  // ------ JS area ------
  const { carts, decQuantity, incQuantity } = props;

  // ------ JSX area ------
  return (
    <div className="w-1/3 bg-orange-100">
      <h2 className="text-2xl py-2">Cart Items:</h2>
      {carts.length === 0 && <p>Cart is Empty</p>}
      <div className="flex flex-col gap-2">
        {carts.map((el) => (
          <CartItem key={el.id} item={el} decQuantity={decQuantity} incQuantity={incQuantity} />
        ))}
      </div>
      <pre>{JSON.stringify(carts, null, 2)}</pre>
    </div>
  );
}

export default CartSummary;

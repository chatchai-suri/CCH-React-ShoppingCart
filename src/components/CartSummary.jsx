import _React from "react";
import CartItem from "./CartItem";

function CartSummary(props) {
  // ------ JS area ------
  const { carts, decQuantity, incQuantity } = props;

  // Function
  // itemsPrice is sum of all item price x quantity
  const itemsPrice = carts.reduce((acc, el)=> (acc + el.price * el.quantity),0)

  // assume tax rate = 7%
  const tax = itemsPrice * 0.07

  // shipping free where itemsPrice >= 500
  const shipping = itemsPrice > 500 || itemsPrice === 0 ? 0 : 50

  // Total sum of ItemsPrice + tax + shipping fee
  const total = itemsPrice + tax + shipping

  // ------ JSX area ------
  return (
    <div className="w-1/3 bg-orange-100 p-2">
      <h2 className="text-2xl p-2">Cart Items:</h2>
      {carts.length === 0 && <p>Cart is Empty</p>}
      <div className="flex flex-col gap-2">
        {carts.map((el) => (
          <CartItem key={el.id} item={el} decQuantity={decQuantity} incQuantity={incQuantity} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 text-sm mt-4 border-t border-white ">
        <div className="flex justify-between items-center p-2 ">
          <span>Items Price</span>
          <span>฿{itemsPrice.toLocaleString("Th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between items-center p-2 ">
       <span>Tax</span>
          <span>฿{tax.toLocaleString("Th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between items-center p-2 ">
<span>Shipping</span>
          <span>฿{shipping.toLocaleString("Th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between items-center p-2 font-bold ">
          <span>Total</span>
          <span className="font-bold text-right w-20 border ">฿{total.toLocaleString("Th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>
      {/* <pre>{JSON.stringify(carts, null, 2)}</pre> */}
    </div>
  );
}

export default CartSummary;

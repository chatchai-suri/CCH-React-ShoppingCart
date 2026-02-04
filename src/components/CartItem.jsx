import _React from "react";

function CartItem() {
  return (
    <div className="flex justify-between p-1.5">
      <p>shoes</p>
      <div className="flex gap-1">
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-gray-500">-</p>
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-gray-500">+</p>
      </div>
      <p>1 * ฿1000</p>
    </div>
  );
}

export default CartItem;

import _React from "react";

function CartItem(props) {
  const {item: {id, title, price, quantity}} = props
  return (
    <div className="flex justify-between p-1.5">
      <p>{title.split(' ')[0]+ " " +title.split(' ')[1]}</p>
      <div className="flex gap-1">
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-gray-500">-</p>
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-gray-500">+</p>
      </div>
      <p>{quantity} * ฿{price}</p>
    </div>
  );
}

export default CartItem;

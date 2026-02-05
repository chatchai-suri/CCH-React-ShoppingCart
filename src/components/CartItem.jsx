import _React from "react";

function CartItem(props) {
  // ------ JS area ------
  const {item: {id, title, price, quantity}, decQuantity, incQuantity} = props

  // ------ JSX area ------
  return (
    <div className="flex justify-between p-2 text-sm g-2">
      <p className="flex-1 line-clamp-1 min-w-0 ">{title.split(' ')[0]+ " " +title.split(' ')[1]}</p>
      <div className="flex gap-1 items-center justify-center w-20">
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-gray-500" onClick={()=>decQuantity(id)} >-</p>
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-gray-500" onClick={()=>incQuantity(id)}>+</p>
      </div>
      <p className="w-24 text-right font-mono font-semibold">{quantity} * ฿{price}</p>
    </div>
  );
}

export default CartItem;

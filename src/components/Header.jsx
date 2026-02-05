import _React from "react";
import CartCount from "./CartCount";

function Header(props) {
  // ------ JS area ------
  const {carts} = props
  // State
  

  // Function

  // ------ JSX area ------
  return (
    <div className="flex justify-between min-h-20 bg-info">
      <div>Logo, Brand</div>
      <CartCount carts={carts} />
    </div>
  );
}

export default Header;

import _React from "react";
import CartCount from "./CartCount";

function Header() {
  return (
    <div className="flex justify-between h-15 bg-info">
      <div>Logo, Brand</div>
      <CartCount />
    </div>
  );
}

export default Header;

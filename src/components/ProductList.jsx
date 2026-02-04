import {_useState} from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
  // ------ JS area ------
  const {products} = props
  // State
  

  // Function

  // ------ JSX area ------
  return (
    <div className="w-2/3 bg-gray-300">
      <h2>Product</h2>
      <ProductCard />
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default ProductList;

import { _useState } from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
  // ------ JS area ------
  const { products } = props;
  console.log(products[0]);
  // State

  // Function

  // ------ JSX area ------
  return (
    <div className="w-2/3 bg-gray-300">
      <h2>Product List</h2>
      <div className="flex flex-col gap-2 ps-2">
        {products.map((el) => (
          <ProductCard key={el.id} productItem={el} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

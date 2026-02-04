import { _useState } from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
  // ------ JS area ------
  const { products, addToCard } = props;
  console.log(products[0]);
  // State

  // Function

  // ------ JSX area ------
  return (
    <div className="w-2/3 bg-gray-300 ps-2">
      <h2 className="text-2xl py-2">Product List</h2>
      <div className="flex flex-wrap gap-3">
        {products.map((el) => (
          <ProductCard key={el.id} productItem={el} addToCard={addToCard}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

import _React, { useState } from "react";

function ProductCard(props) {
  // ------ JS area ------
  const {
    productItem: { id, category, description, title, images, price, _rating },
    addToCard
  } = props;

  // State
  const [showDesc, setShowDesc] = useState(false)

  // ------ JSX area ------
  return (
    <div className="card bg-base-100 w-70 shadow-xl pt-2">
      <p className="ps-4">{id}</p>
      <figure className="h-40 mt-2">
        <img src={images} alt={title} className="h-full w-full object-contain"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{title}</h2>
        <p className="text-sm text-pink-400 text-center">{category}</p>
        <p className={`${showDesc ? '' : 'line-clamp-2'} cursor-pointer hover:text-blue-600 transition-colors `} onClick={()=>setShowDesc(prev=>!prev)} >{description}</p>
        <p className="text-slate-700 text-2xl">฿{price.toLocaleString()}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>addToCard(id, title, price)} >Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

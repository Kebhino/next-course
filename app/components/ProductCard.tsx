import React from "react";
import AddToCart from "./AddToCart";



const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-500 hover:bg-sky-700 text-[white] text-2xl border-2 rounded-2xl border-solid' >
      <AddToCart />
    </div>
  );
};

export default ProductCard;

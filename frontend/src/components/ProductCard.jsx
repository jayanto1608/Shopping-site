import React from 'react'

const ProductCard = ({title, price, imgUrl,isVisible}) => {
  return (
    
    <div style={{visibility:isVisible}} className="bg-gray-500 m-4 mr-10 p-4 rounded w-[320px] cursor-pointer">
    <img className="h-[220px] w-[270px] rounded pl-3 " src= {imgUrl} alt="Motorola" />
    <h2>{title}</h2>
    <div className="flex justify-between items-center">
    <p>Price: {price}</p>
    <button className="bg-yellow-400 p-2 rounded text-sm font-medium ">Add to cart</button>
    </div>
  </div>

   
  
  );
};

export default ProductCard
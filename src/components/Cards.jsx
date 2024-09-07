import React from 'react';
import { FaTruckArrowRight } from "react-icons/fa6";

const Cards = ({ item }) => {
  if (!item) {
    // Optionally, you can return a loading state or a fallback UI
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="card select-none -z-50 bg-base-100 shadow-md mx-1 my-2 h-[350px] md:h-[355px] flex flex-col">
      <div className="relative px-1 py-1 flex justify-between items-start">
        {item.deliveryTime && (
          <a 
            href="#" 
            className="bg-green-500  flex items-center justify-center rounded-[4px] text-[9px] w-12 text-white"
            aria-label="Delivery time"
          >
            <FaTruckArrowRight className="text-white" />
            {item.deliveryTime}
          </a>
        )}
        {item.sale && (
          <a 
            href="#" 
            className="bg-[#d8345f] rounded-tr-md text-[10px] px-1 text-white absolute top-0 right-0"
            aria-label="Sale"
          >
            {item.sale}
          </a>
        )}
      </div>
      
      {item.type && (
        <div className="relative z-40 px-1">
          <a 
            href="#" 
            className="rounded-md px-2 py-1 font-bold uppercase tracking-tight text-[7px] bg-[#f76707] text-white"
            aria-label="Item type"
          >
            {item.type}
          </a>
        </div>
      )}
      
      <figure className="flex justify-center">
        <img 
          className="hover:scale-105 w-28 md:w-[120px] md:h-[120px] border-none transition-all duration-200" 
          src={item.image} 
          alt={item.name} 
          loading="lazy"
        />
      </figure>
      
      <div className="flex items-center justify-center">
        <span className="border-2 px-1 z-40 text-[10px] rounded-full">{item.country}</span>
      </div>
      
      <div className="card-body flex flex-col justify-between flex-grow">
        <div className="text-center">
          <p className="card-title text-[10px] md:text-[12px] text-center leading-tight font-semibold">{item.name}</p>
        </div>
      
        <div className="text-center">
          {item.price && (
            <p className="text-[10px] md:text-[12px] font-bold text-zinc-400 line-through">
              AED <span>{item.price}</span>
            </p>
          )}
          <p className="text-[10px] md:text-[12px] font-bold text-red-400 px-2">
            AED <span>{item.onsale}</span>
          </p>
        </div>
        
        <button 
          className="bg-green-200 btn hover:bg-green-500 hover:text-white text-[10px] md:text-[12px] w-full mt-auto"
          aria-label="Add to cart"
        >
          {item.quantity > 0 ? `Add ${item.quantity} to Cart` : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default Cards;

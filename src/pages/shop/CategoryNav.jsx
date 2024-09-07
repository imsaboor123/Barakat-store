import React, { useEffect, useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { FaSortAmountUp } from 'react-icons/fa';
import { CiDeliveryTruck } from "react-icons/ci";
import { useFilterContext } from '../../context/FilterMenu';

const CategoryNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { categoriesData } = useFilterContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <>
  
    <div className={`md:hidden w-full border-b ${isSticky ? 'fixed top-0 left-0 right-0 z-40 bg-white shadow-sm' : ''}`}>
    <div className="p-3 items-center flex ">
      {/* Back Arrow */}
      <div className="shrink-0 flex "> {/* Reduced padding */}
        <MdArrowBackIos className="text-md" />
      </div>
  
      {/* Categories */}
      <ul className="flex overflow-x-auto flex-grow scrollbar-hide">
        {categoriesData && categoriesData.categories ? (
          categoriesData.categories.map((category, index) => (
            <li key={index} className='hover:bg-green-300 rounded-md relative group px-3  whitespace-nowrap'> {/* Reduced padding */}
              <a href="#" className='text-[13px] font-semibold text-zinc-500'>{category.category}</a>
            </li>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
  
      {/* Search Icon */}
      <div className="shrink-0 flex items-center justify-center p-1"> {/* Reduced padding */}
        <IoSearch className="text-md" />
      </div>
    </div>
  
    {/* Additional Options */}
    <div className="bg-white flex justify-between p-1"> {/* Reduced padding */}
      <div className='flex items-center w-[105px] p-0.5 gap-1 rounded-sm border border-green-500'>
        <CiDeliveryTruck className='text-green-500' />
        <span className='text-green-500 text-[10px] text-nowrap font-bold'>Express Delivery</span>
      </div>
  
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <FaSortAmountUp />
          <span className='text-[10px]'>Sort</span> 
        </div>
        <div className="flex items-center gap-1">
          <span className='text-[10px]'>Filter</span> 
        </div>
      </div>
    </div>
    </div>

    
  </>
  
  );
}

export default CategoryNav;

import React, { useEffect, useState } from 'react';
import { useFilterContext } from '../context/FilterMenu';
import { Link } from 'react-router-dom';

const CategoryNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { categoriesData } = useFilterContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full shadow-sm border-b">
      <div className={`navbar bg-base-100 hidden md:flex md:max-w-screen-2xl md:text-sm mx-auto md:px-20 px-4 ${isSticky ? 'fixed top-16 left-0 shadow-md transition-all duration-300 right-0 z-40' : ''}`}>
        <div className="w-full text-nowrap overflow-x-auto">
          <ul className="flex">
            {categoriesData && categoriesData.categories ? (
              categoriesData.categories.map((category, index) => (
                <li key={index} className='hover:bg-[#f3f4f4] relative group md:p-1 xl:p-3'>
                  <Link to={`/filter/${category.category}`}>
                    <span className='md:text-[12px] xl:text-[14px] font-bold'>{category.category}</span>
                  </Link>
                  <div className="left-0 mt-2 p-4 bg-gray-100 w-[85rem] fixed hidden group-hover:block z-40">
                    <div className="flex px-20 gap-2">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <div key={subIndex} className="flex flex-col items-center">
                          <Link to={`/filter/${category.category}/${subcategory.name}`}>
                            <div className="bg-white flex justify-center items-center w-20 h-20">
                              <img src={subcategory.image} alt={subcategory.name} className="w-20 h-20 object-cover" />
                            </div>
                          </Link>
                          <p className="mt-2 text-center text-sm font-semibold">{subcategory.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li>No categories available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryNavbar;

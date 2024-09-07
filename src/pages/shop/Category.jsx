import React, { useState, useEffect } from 'react';
import FilterCategory from './FilterCategory';
import CategoryNav from './CategoryNav';
import MobileFilter from './MobileFilter';


const Category = () => {
 

  return (
     <>   
     <div className="flex md:hidden">
       <CategoryNav/>
      
     </div>
     <div className="">
     <MobileFilter/>
     </div>
         <FilterCategory/> 
     </>
  );
};

export default Category;

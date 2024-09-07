import React, { createContext, useContext, useEffect, useState } from 'react';

const FilterContext = createContext();

const FilterMenu = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
      .then((response) => response.json())
      .then((data) => {
        console.log("All Categories Data:", data);  // Log the fetched data
        setCategoriesData(data);  // Set the fetched data
      })
      .catch((error) => {
        console.error('Error fetching categories data:', error);
      });
  }, []); 

  return (
    <FilterContext.Provider value={{ categoriesData }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterMenu;

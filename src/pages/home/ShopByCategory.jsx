import React, { useEffect, useState } from 'react';
 
const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/menu.json')
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
      })
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-24 p-1 pt-4 ">
      <div>
        <h2 className='text-md text-zinc-600 font-bold text-nowrap tracking-tighter'>
          Shop by Category
        </h2>
        <div className="w-full grid grid-cols-4  py-5">
          {categories.map(category => (
            <div key={category.category}>
              <div className="flex w-[85px] flex-col items-center border px-4 py-4 border-zinc-100 shadow-sm">
                <img className="object-cover" src={category.image} alt={category.category} />
              </div>
              <h3 className="mt-2 text-[10px] font-semibold text-zinc-800 text-center">
                {category.category}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;

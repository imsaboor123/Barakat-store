import React from 'react'
import Cards from '../../components/Cards'

const MobileFilter = () => {
  return (
   <>
  
  <div className="w-full flex md:hidden">
  <div className="fixed left-0 top-20 h-[calc(100vh-4rem)] w-1/4 bg-[#EEFBF1] shadow-md overflow-y-auto">
    {[...Array(1)].map((_, index) => (
      <div key={index} className="flex flex-col bg-white items-center p-2">
        <div className="w-full bg-white mb-4">
          <img 
            src="/images/Mango-item/Mango_Fruit.png" 
            alt="Mango Fruit" 
            className="w-full rounded-md shadow-sm hover:shadow-lg transition-shadow"
          />
        </div>
        <p className='text-xs font-bold'>All</p>
      </div>
    ))}
     <div  className="flex flex-col items-center p-2">
        <div className="w-full bg-white mb-4">
          <img 
            src="/images/Mango-item/Mango_Fruit.png" 
            alt="Mango Fruit" 
            className="w-full rounded-md shadow-sm hover:shadow-lg transition-shadow"
          />
        </div>
        <p className='text-xs font-bold'>All</p>
      </div>
  </div>

  <div className="w-full ml-1/4">
    <Cards />
  </div>
</div>


   </>
  )
}

export default MobileFilter

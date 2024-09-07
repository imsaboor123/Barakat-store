import { useState, useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineKeyboardArrowDown, MdOutlineFireTruck } from 'react-icons/md';
import Slider from 'react-slick';

export default function YourComponent() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
   
  };
  
 
  return (
    <div className="w-full flex flex-col md:flex-row overflow-hidden">
      {/* First Section */}
     
    <div className=" w-full md:w-1/2  bg-green-600 text-white md:bg-white md:text-zinc-600  flex justify-center items-center ">
      <Slider {...settings}>
        <div className='text-[10px] md:text-[10px] text-center font-bold'>
          <h3>   
          ORDER BEFORE 1 PM FOR SAME DAY DELIVERY IN DUBAI & SHARJAH
          </h3>
        </div>
        <div className='text-[10px] text-center md:text-[10px] font-bold'>
          <h3>
          DELIVERING IN DXB, ABU DHABI, SHARJAH & AL AIN
          </h3>
        </div>
        <div className='text-[10px] text-center md:text-[10px] font-bold'>
          <h3>
          ORDER TODAY TILL 9 PM FOR TOMORROW MORNING DELIVERY
          </h3>
        </div>
        <div className='text-[10px] text-center md:text-[10px] font-bold'>
          <h3>
          ORDER BEFORE 1 PM FOR SAME DAY DELIVERY IN DUBAI & SHARJAH
          </h3>
        </div> 
        <div className='text-[10px] text-center md:text-[10px] font-bold'>
          <h3>
          DELIVERING IN DXB, ABU DHABI, SHARJAH & AL AIN
          </h3>
        </div>
      </Slider>
     </div>

      {/* Second Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center gap-1  md:gap-7 lg:gap-10 mt-2 md:mt-0">
        {/* Location Dropdown */}
        <div className="w-44  py-1">
          <div className="flex items-center justify-center gap-2 md:gap-4  md:border border-gray-300 bg-white rounded-md  py-2 cursor-pointer">
            <CiLocationOn className="" />
            <button
              className="font-bold text-[12px]  md:text-md flex md:whitespace-nowrap"
              onClick={() => setIsLocationModalOpen(true)}
            >
              Abu Hail Dubai
            </button>
            <MdOutlineKeyboardArrowDown />
          </div>

          {/* Modal */}
          {isLocationModalOpen && (
            <dialog open className="modal">
              <div className="modal-box">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute  right-2 top-2"
                  onClick={() => setIsLocationModalOpen(false)}
                >
                  ✕
                </button>
                <div>
                  <a href="#" className="btn hover:bg-green-400 text-md bg-white hover:text-white">
                    Abu Dhabi
                  </a>
                </div>
              </div>
            </dialog>
          )}
        </div>
        
        <div className=" flex gap-3 items-center justify-center">
        {/* Delivery Information */}
        <div className="flex items-center py-1">
          <div className="flex items-center space-x-1 bg-base-200 rounded-md p-2">
            <MdOutlineFireTruck className="text-gray-600 text-lg" />
            <span className="font-semibold text-[10px] md:text-sm text-red-500">Today</span>
          </div>
        </div>

        {/* Delivery Time */}
        <div className="py-1">
          <span className="md:text-[13px] font-bold text-[12px]">6PM-7PM</span>
        </div>
        </div>
      </div>
    </div>
  );
}

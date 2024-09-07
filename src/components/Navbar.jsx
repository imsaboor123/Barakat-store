import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import { FaUserAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);


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
      {/* Top Bar */}
      <div className="hidden md:flex">
        <TopBar />
      </div>
      
      {/* Navbar */}
      <div>
        <div className={`navbar md:max-w-screen-2xl md:bg-[#2cd567] bg-white shadow-sm md:text-white text-zinc-600 md:container md:mx-auto md:px-10 lg:px-24 ${isSticky ? 'fixed top-0 left-0 right-0 transition-all duration-300 z-50' : ''}`}>
          <div className="navbar-start flex items-center">
            <img src="barakat-logo-en-white.81664276.png" className="w-32 hidden md:flex" alt="Barakat Logo" />
            <img src="barakatlogo.png" className="w-20" alt="Barakat Logo" />
          </div>

          <div className="form-control flex items-center justify-center w-full lg:w-auto">
            <form className="relative w-[215px] left-2 sm:left-0 xl:w-[600px] mx-auto border overflow-hidden text-zinc-700 rounded bg-white flex">
              <input
                type="text"
                className="w-full m-2 p-2 text-xs rounded-lg outline-none"
                placeholder="What are you looking for?"
              />
              <button
                type="submit"
                className="px-4 bg-white text-zinc-700 rounded-r"
              >
                <IoIosSearch />
              </button>
            </form>
          </div>

          <div className="navbar-end font-extrabold    md:gap-4 flex items-center">
            <a className="text-md font-bold">العربية</a>
            <a href="#" className='text-md md:flex gap-1 hidden'>Signin <FaUserAlt className='m-1' /></a>
            <div className="dropdown dropdown-end hidden md:flex">
              <div tabIndex={0} role="button" className="flex gap-2 items-center">
                <a href="#" className='text-md'>Cart</a>
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navbar */}
      
    </>  
  );
};

export default Navbar;

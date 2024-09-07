import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { FaCrown, FaUser, FaShoppingCart } from "react-icons/fa";

const TabMenu = () => {

    const tabMenu = [
        { name: 'Home', icon: <IoHomeOutline />, link: '/' },
        { name: 'Categories', icon: <TbCategoryPlus />, link: '/categories' },
        { name: 'Rewards', icon: <FaCrown />, link: '/rewards' },
        { name: 'Account', icon: <FaUser />, link: '/account' },
    ];

    return (
        <div className="bg-white fixed bottom-0 shadow-sm w-full z-50">
            <div className="container mx-auto">
                <ul className='flex gap-9 py-2 items-center justify-center  text-zinc-700'>
                    {tabMenu.map((item, index) => (
                        <li key={index} className='flex flex-col items-center text-[11px]'>
                            <a href={item.link} className="flex flex-col items-center">
                                <span className='text-xl text-green-400 '>{item.icon}</span>
                                <span className="mt-1 hover:text-green-400">{item.name}</span>
                            </a>
                        </li>
                        
                    ))}
                    <li className='flex flex-col items-center text-[10px]'>
                            <a href='' className="flex flex-col items-center ">
                                <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 text-green-400 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">0</span>
                                </div>
                                <span className="hover:text-green-400 text-[11px]">Cart</span>
                            </a>
                        </li>
                </ul>
            </div>
        </div>
    );
}

export default TabMenu;

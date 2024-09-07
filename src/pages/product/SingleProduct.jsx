import React, { useRef } from 'react';
import { PiClockUserFill } from "react-icons/pi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SingleProduct = () => {
    const sliderRef = useRef(null);

    const images = [
        {
            src: "/images/Ready to cook/anyconv.com__f649448_-_salmon_teriyaki_with_mixed_vegetables_cooked.jpg",
            alt: "Salmon Teriyaki",
        },
        {
            src: "/images/Ready to cook/arabic_chicken_kofta_500g.png",
            alt: "Arabic Chicken Kofta",
        },
        {
            src: "/images/Ready to cook/f649444_-_chicken_breast_stuffed_with_mozzarella_tomato_cooked.jpg",
            alt: "Chicken Breast Stuffed",
        },
    ];

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-4 md:px-24 py-6">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="bg-white p-6">
                            <img
                                className="w-full h-auto rounded-lg mb-4" // Make image responsive
                                src="/images/Ready to cook/anyconv.com__f649448_-_salmon_teriyaki_with_mixed_vegetables_cooked.jpg"
                                alt="Salmon Teriyaki"
                            />
                        </div>

                        <div className="relative h-36 flex justify-center items-center">
                            {/* Left Button */}
                            <button
                                className="absolute left-0 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-200 transition"
                                onClick={scrollLeft}
                            >
                                <FaAngleLeft />
                            </button>

                            {/* Scrollable Images */}
                            <div
                                ref={sliderRef}
                                className="flex p-2 gap-2 overflow-x-auto scroll-smooth"
                            >
                                {images.map((image, index) => (
                                    <div key={index} className="border rounded-md">
                                        <img
                                            className="h-20 w-20 object-cover rounded-md" // Ensure images maintain aspect ratio
                                            src={image.src}
                                            alt={image.alt}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Right Button */}
                            <button
                                className="absolute right-0 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-200 transition"
                                onClick={scrollRight}
                            >
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl tracking-tighter font-semibold">
                                    Salmon Teriyaki with Mixed Vegetables 410g
                                </h2>
                                <span className='border rounded-md uppercase px-2 py-2 text-[12px] font-semibold'>uae</span>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <h2 className='font-semibold'>AED 52.50</h2>
                                <span className='text-[13px]'>(Inclusive of all VAT)</span>
                            </div>
                            <div className="mt-5">
                                <span className='text-sm'>Size: <span className='font-semibold'>1 Pack</span></span>
                            </div>
                            <div className="mt-10">
                                <button className='btn w-full uppercase bg-green-500 hover:bg-green-600 text-white transition'>
                                    Add To Cart
                                </button>
                            </div>
                            <div className="flex items-center w-full border border-green-500 rounded-md mt-5">
                                <div className="p-3">
                                    <PiClockUserFill className='h-10 w-10' />
                                </div>
                                <div className="">
                                    <span className='block font-semibold text-[10px]'>Shelf Life</span>
                                    <span className='block font-bold text-green-500'>2 Days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-20">
                    <div className="flex gap-4 items-center text-center">
                        <h2 className='font-bold text-xl'>Description</h2>
                        <span className='bg-zinc-500 w-full border'></span>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className='font-bold underline'>Ingredient:</h3>
                    <p className='pt-3'>Mango</p>
                </div>

                <div className="mt-6">
                    <div className="flex items-center gap-4 text-center">
                        <h2 className='font-bold text-xl'>Disclaimer</h2>
                        <span className='bg-zinc-500 w-full border'></span>
                    </div>
                    <p className='pt-4'>Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.</p>
                </div>

                <div className="mt-5">
                    <div className="pt-4">
                        <h2 className='font-bold'>Our Top Deals</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;

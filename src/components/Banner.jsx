import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import ShopByCategory from '../pages/home/ShopByCategory';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "barakat_fresh_-_banners_v2-01.jpg",
    "froza-launch.jpg",
    "image_3__1 (1).jpg",
    "mango_snakefruit_lychee_web_banner_en_2 (1).jpg"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
      <>
      <div className="flex md:hidden">
        <TopBar/>
      </div>
      <div className="carousel mt-3 max-w-screen-2xl h-[6rem] md:h-[13rem] lg:h-[20rem]  text-white container mx-auto md:px-10  px-2  overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide}
          id={`slide${index + 1}`}
          className={`carousel-item relative w-full ${index === currentIndex ? '' : 'hidden'}`}
        >

          <img
            src={`/images/main-slider/${slide}`} 
            className="w-full"
            alt={`Slide ${index + 1}`}
          />
        </div>
      
      ))}
          
    </div>
      <div className="md:hidden">
          <ShopByCategory/>
        </div> 
       <div className="max-w-screen-2xl space-y-2 md:space-y-10 pt-14  container mx-auto md:px-24  ">
      <div className="block">
        <img src="\images\Letest-Parpocation\Express_Delivery_90_Mins_-_1800x75_Link_V2_1_.jpg" alt="" />
      </div>
      <div className="block">
        <img src="\images\Letest-Parpocation\2312413_gifbannerbuy3get1icecreamoffer_2_073024_1_.jpg" alt="" />
      </div>
      </div>
      </>
  );
};

export default Banner;

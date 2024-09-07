import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ItemSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container md:max-w-screen-2xl md:container md:mx-auto md:px-32 px-2">
      <Slider {...settings}>
        <div className='rounded-md'>
          <img className='rounded-md' src="\ItemSlide\2326722_whatcustomersspeak_banner2_750x350_081424.jpg" alt="" />
        </div>
        <div className='rounded-md'>
          <img className='rounded-md' src="\ItemSlide\2326722_whatcustomersspeak_banner3_750x350_081424.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ItemSlider;

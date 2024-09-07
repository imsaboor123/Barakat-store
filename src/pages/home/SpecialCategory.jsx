import React, { useEffect, useState, useRef } from 'react';
import Cards from '../../components/Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SpecialCategory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const sliderRef = useRef(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
   
    fetch('/menu.json')
      .then(response => response.json()) 
      .then(data => {
        console.log('Fetched data:', data);

        
        if (Array.isArray(data.categories)) {
         
          const filteredCategories = data.categories.filter(category =>
            ["Latest promotions", "90 minutes delivery", "Juice Pops", "Ready Meals", "Family Packs", "Berries"].includes(category.category)
          );
          setCategories(filteredCategories); 
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  const getCategoryItems = (categoryName) => {
    const category = categories.find(cat => cat.category === categoryName);
    console.log('Items for category:', categoryName, category);
    return category ? category.items : [];
  };

  return (
    <div className="md:max-w-screen-2xl md:container md:mx-auto md:px-10 lg:px-20 px-2 ">
      {categories.map(category => {
        const items = getCategoryItems(category.category);
        return (
          <div className="mt-10" key={category.category}>
            <h2 className='text-md md:text-xl font-bold'>{category.category}</h2>
            <div className="flex pt-2 gap-5">
              <button
                className='p-1 md:p-2 rounded-lg hover:scale-105 transition-all duration-200 bg-[#2cd567] text-white'
                onClick={handlePrevClick}
              >
                <IoIosArrowBack />
              </button>
              <button
                className='p-1 md:p-2 rounded-lg hover:scale-105 transition-all duration-200 bg-[#2cd567] text-white'
                onClick={handleNextClick}
              >
                <IoIosArrowForward />
              </button>
            </div>
            <div className="flex">
              <div className="slider-container h-[30rem] md:px-0 bg-white">
                <Slider {...settings} ref={sliderRef} className='bg-white'>
                  {items.length > 0 ? (
                    items.map(item => (
                      <Cards key={item._id} item={item} />
                    ))
                  ) : (
                    <div>No items available</div>
                  )}
                </Slider>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialCategory;

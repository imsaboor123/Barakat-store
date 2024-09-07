import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import Cards from '../../components/Cards';

const Meats = () => {
  const sliderRef = useRef(null);
  const [filteredItems, setFilteredItems] = useState([]);

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    fetch('/menu.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
  
        if (Array.isArray(data.categories)) {
          const filteredCategories = data.categories.filter(category =>
            ["Meats", "Gift Baskets"].includes(category.category)
          );
  
          console.log('Filtered Categories:', filteredCategories);
  
          const combinedItems = filteredCategories.flatMap(cat => cat.items);
          console.log('Combined Items:', combinedItems);
  
          setFilteredItems(combinedItems);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching menu:', error));
  }, []);
  


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

  return (
    <>
      <div className="md:max-w-screen-2xl md:container md:mx-auto md:px-10 lg:px-20 px-2">
        <div>
          <img src="/images/meats/Premium_Meat_-_Banner_1180x324_2_100523.jpg" alt="Premium Meats" />
        </div>

        {/* Meats */}
        <div className="pt-5">
          <h2 className="text-md md:text-xl font-bold">Premium Meats</h2>
          <div className="flex pt-2 gap-5">
            <button
              className="px-3 py-3 rounded-lg hover:scale-105 transition-all duration-200 bg-[#2cd567] text-white"
              onClick={handlePrevClick}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="px-3 py-3 rounded-lg hover:scale-105 transition-all duration-200 bg-[#2cd567] text-white"
              onClick={handleNextClick}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <div className="flex">
            <div className="slider-container h-[31rem] md:px-0 bg-white">
              <Slider {...settings} ref={sliderRef} className="bg-white">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                    <Cards key={item._id} item={item} />
                ))
                ) : (
                <div>No items available</div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meats;

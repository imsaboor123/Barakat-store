import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import '../../App.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Cards from '../../components/Cards';

const VagetableCategory = () => {
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

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);

       
        if (Array.isArray(data.categories)) {
          const bulkBuyCategory = data.categories.find((cat) => cat.category === 'Bulk Buy');
          if (bulkBuyCategory) {
            setFilteredItems(bulkBuyCategory.items);
          } else {
            console.error('Bulk Buy category not found');
          }
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching menu:', error));
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
      <div className="md:max-w-screen-2xl mt-10 md:container md:mx-auto md:px-10 lg:px-20 px-2">
        <div className='w-full'>
          <img className="bg-cover" src="images/vagetable/EWBulkBuy.png" alt="" />
        </div>

        {/* Vagetable Slider */}
        <div className="pt-5">
          <h2 className="text-md md:text-xl font-bold">Bulk Buy</h2>
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
            <div className="slider-container h-[31rem]  md:px-0 bg-white">
              <Slider {...settings} ref={sliderRef} className="bg-white">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
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

export default VagetableCategory;

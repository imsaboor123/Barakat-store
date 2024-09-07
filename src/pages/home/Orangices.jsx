import React, { useEffect, useState, useRef } from 'react';
import Cards from '../../components/Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Orangices = () => {
  const sliderRefs = {
    Organics: useRef(null),
    ExoticRange: useRef(null),
    GrabNGo: useRef(null),
  };
  const [categories, setCategories] = useState([]);

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
        if (Array.isArray(data.categories)) {
          const filteredCategories = data.categories.filter(category =>
            ["Organics", "Exotic Range", "Grab n Go"].includes(category.category)
          );
          setCategories(filteredCategories);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  const handlePrevClick = (category) => {
    if (sliderRefs[category]?.current) {
      sliderRefs[category].current.slickPrev();
    }
  };

  const handleNextClick = (category) => {
    if (sliderRefs[category]?.current) {
      sliderRefs[category].current.slickNext();
    }
  };

  const renderSlider = (categoryName) => {
    const category = categories.find(cat => cat.category === categoryName);
    const items = category ? category.items : [];

    return (
      <div className="pt-4">
        <h2 className="text-md md:text-xl font-bold">{categoryName}</h2>
        <div className="flex pt-2 gap-5">
          <button
            className="px-3 py-3 rounded-lg hover:scale-105 transition-all duration-200 bg-[#2cd567] text-white"
            onClick={() => handlePrevClick(categoryName)}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="px-3 py-3 rounded-lg hover:scale-105 transition-all duration-200 bg-[#2cd567] text-white"
            onClick={() => handleNextClick(categoryName)}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <div className="flex">
          <div className="slider-container h-[31rem] md:px-0 bg-white">
            <Slider {...settings} ref={sliderRefs[categoryName]} className="bg-white">
              {items.length > 0 ? (
                items.map((item) => (
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
  };

  return (
    <div className="md:max-w-screen-2xl md:container md:mx-auto md:px-10 lg:px-20 px-2">
      <div>
        <img src="images/Organics/Eweborganic1.jpg" alt="Organics" />
      </div>

      {/* Render Sliders */}
      {["Organics", "Exotic Range", "Grab n Go"].map((categoryName) => (
        <React.Fragment key={categoryName}>
          {renderSlider(categoryName)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Orangices;

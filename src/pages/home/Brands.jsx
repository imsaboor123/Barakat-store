import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024, // Tablets and iPads
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768, // Small tablets and larger mobile devices
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480, // Mobile devices
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 360, // Smaller mobile devices
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const partners = [
        "/images/Brands/al_douri_2.png",
        "/images/Brands/al_jazira_poultry_2.png",
        "/images/Brands/al_rawabi_2.png",
        "/images/Brands/bayara_2.png",
        "/images/Brands/driscoll_2.png",
        "/images/Brands/foodcraft_3.png",
        "/images/Brands/hayatna_2.png"
    ];

    return (
        <div className="md:max-w-screen-2xl md:container md:mx-auto md:px-10 lg:px-20 px-2">
            <h2 className="px-1 text-md font-bold mb-3">Our Brands</h2>
            <section className="customer-logos">
                <Slider {...settings}>
                    {partners.map((partner, index) => (
                        <div key={index} className="slide p-2">
                            <img src={partner} alt={`Partner ${index + 1}`} className="mx-auto max-h-20 md:max-h-24" />
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default Brands;

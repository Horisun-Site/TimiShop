import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slowers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  const slides = [
    {
      img: "https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_960_720.jpg",
      title: "High Quality Audio",
      description: "Experience crystal clear sound with our premium audio devices.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/04/22/10/44/camera-2251051_1280.jpg",
      title: "Professional Cameras",
      description: "Capture your moments with high-resolution cameras for photography lovers.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/09/26/19/40/iphone-7481400_960_720.jpg",
      title: "Latest Smartphones",
      description: "Stay connected with the newest smartphones in the market.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/03/17/02/40/rings-2150772_960_720.jpg",
      title: "Elegant Accessories",
      description: "Stylish and trendy accessories for every occasion.",
    },
  ];

  return (
    <div className="h-[75vh] w-full bg-[#1a1a1a] flex items-center justify-center p-6 slowers-container">
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow-lg p-6 slowers-slide-wrapper">
                
                {/* Image */}
                <div className="md:w-1/2 w-full h-64 md:h-80 slowers-image">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 w-full text-black">
                  <h2 className="text-3xl font-bold mb-3 slowers-title">{slide.title}</h2>
                  <p className="text-gray-700 text-lg slowers-text">{slide.description}</p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slowers;

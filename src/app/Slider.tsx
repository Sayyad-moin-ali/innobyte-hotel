"use client"
import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import { sliderData } from './constant'; // Assuming sliderData is an array of objects with 'url', 'alt', and 'title' properties

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

 
  const goToPreviousSlide = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (imageIndex < sliderData.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };


  return (
    <div className="w-full h-full pt-13 relative">
      <div className="slider-container w-full h-96 relative overflow-hidden">
        <div className="slider w-full h-full flex transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
          {sliderData.map((item, index) => (
            <div key={index} className="slide w-full h-full relative flex-shrink-0 flex justify-center items-center">
              <Image src={item.url} alt={item.alt} layout="fill" objectFit="cover" />
              <div className="absolute bg-black bg-opacity-50 text-white p-2 text-center lg:w-[30%] w-[45%] lg:text-5xl text-2xl ">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4 z-10">
        <button onClick={goToPreviousSlide} className="text-white bg-gray-700 bg-opacity-50 p-2 rounded-full focus:outline-none">
          <BsArrowLeftCircleFill size={30} />
        </button>
        <button onClick={goToNextSlide} className="text-white bg-gray-700 bg-opacity-50 p-2 rounded-full focus:outline-none">
          <BsArrowRightCircleFill size={30} />
        </button>
      </div>
    </div>
  );
};

export default Slider;

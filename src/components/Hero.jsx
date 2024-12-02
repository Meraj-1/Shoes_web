import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets"; 

const HeroSection = () => {
  const images = [assets.Hero3, assets.Hero4,assets.about]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);
  return (
    <div
    className="relative md:h-screen flex items-center justify-center text-white"
    style={{
      backgroundImage: `url(${images[currentImageIndex]})`,
      backgroundSize: "cover", // Ensures the image covers the entire background
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      backgroundAttachment: "fixed", // Keeps the image fixed during scroll
      transition: "background-image 1.5s ease-in-out", // Smooth transition
    }}
  >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Our Web Application
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Experience the best with dynamic design.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;


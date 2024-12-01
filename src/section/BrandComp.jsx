import React from "react";
import { brand } from "../assets/assets"; // Assuming your images are in assets

const BrandSlider = () => {
  const products = [
    {
      name: "Nike",
      imageUrl: brand.nike,
    },
    {
      name: "Adidas UltraBoost 21",
      imageUrl: brand.adidas,
    },
    {
      name: "Puma RS-X3",
      imageUrl: brand.puma,
    },
    {
      name: "Bata",
      imageUrl: brand.bata,
    },
    {
      name: "Billy",
      imageUrl: brand.billy,
    },
    {
      name: "Balenciaga",
      imageUrl: brand.Balenciaga,
    },
    {
      name: "Chief",
      imageUrl: brand.chief,
    },
    {
      name: "Clarks",
      imageUrl: brand.clarks,
    },
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Slider Section */}
      <h1 className="">OUR PARTNER'S</h1>
      <div className="overflow-hidden relative">
        <div className="flex items-center animate-slider">
          {products.concat(products).map((product, index) => (
            <div
              key={index}
              className="min-w-[200px] mx-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md flex-shrink-0"
            >
              <img
                className="h-32 mx-auto object-contain"
                src={product.imageUrl}
                alt={product.name}
              />
              <h3 className="text-center text-xl font-semibold text-gray-800 mt-2">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 p-10">
        {/* Text Content */}
        <div className="flex justify-center items-center bg-white rounded-lg shadow-md p-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus quod nemo aliquam nulla obcaecati nam ad? Sunt
              perferendis magnam aperiam obcaecati, non qui modi illum,
              similique quos quis, vitae aliquid.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eveniet facilis aut aperiam illum ullam tempore voluptatibus
              atque ea tenetur! Itaque quibusdam impedit facilis harum debitis,
              dignissimos necessitatibus qui odit.
            </p>
          </div>
        </div>

        {/* Placeholder for Additional Content */}
        <div className="flex justify-center items-center bg-gray-200 rounded-lg shadow-md p-8">
          <p className="text-gray-600 leading-relaxed">
            Add more details, contact information, or any additional
            promotional content here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;


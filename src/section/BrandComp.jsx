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
    <div className="">
      <div className=" bg-purple-100  flex items-center animate-slider">
        {products.concat(products).map((product, index) => (
          <div
            key={index}
            className="min-w-[200px] p-4 border rounded-lg bg-white border-black shadow-md flex-shrink-0"
          >
            <img
              className="h-32 mx-auto object-contain"
              src={product.imageUrl}
              alt={product.name}
            />
            <h3 className="text-center text-2xl font-bold text-gray-800 mt-2">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
      <hr/>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 px-40 py-60">
      <div className="flex bg-white justify-center">
        <div>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quod nemo aliquam nulla obcaecati nam ad? Sunt perferendis magnam aperiam obcaecati, non qui modi illum, similique quos quis, vitae aliquid.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet facilis aut aperiam illum ullam tempore voluptatibus atque ea tenetur! Itaque quibusdam impedit facilis harum debitis, dignissimos necessitatibus qui odit.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit nemo ullam dolore itaque quos fugiat, quasi quo necessitatibus ad doloremque nostrum! Totam fugiat, suscipit consequuntur impedit quod veritatis illum!</p>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique nobis tempora aliquam dicta delectus optio! Reiciendis labore corporis odit officia est itaque minima quisquam animi, ratione cum, aliquid maxime?</p>
        </div>
        </div>
      </div>

    </div>
  );
};

export default BrandSlider;


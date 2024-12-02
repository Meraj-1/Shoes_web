import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=  "">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img src={assets.weblogo} className="h-30 w-40" alt="Logo" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black flex text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none z-50 md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-black text-center md:text-left">
            <li className="font-bold p-4 md:p-0 hover:bg-gray-100 md:hover:bg-transparent">
              <a href="/">Home</a>
            </li>
            <li className="font-bold p-4 md:p-0 hover:bg-gray-100 md:hover:bg-transparent">
              <a href="/about">About</a>
            </li>
            <li className="font-bold p-4 md:p-0 hover:bg-gray-100 md:hover:bg-transparent">
              <a href="/contact">Contact</a>
            </li>
            <li className="font-bold p-4 md:p-0 hover:bg-gray-100 md:hover:bg-transparent">
              <a href="/brands">Brands</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

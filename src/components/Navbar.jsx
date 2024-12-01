import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          {/* <a href={assets.rebok}>{assets.puma}</a> */}
          <Link to={"/home"}><img src={assets.weblogo} className="h-30 w-40" alt=""/></Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" text-black text-3xl md:hidden focus:outline-none"
        >
          ☰
        </button>
        {/* Menu Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto  md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-black text-center md:text-left">
            <li className="hover:bg-blue-600 font-bold  md:hover:bg-transparent p-4 md:p-0">
              <a href="#">Home</a>
            </li>
            <li className="hover:bg-blue-600 font-bold md:hover:bg-transparent p-4 md:p-0">
              <a href="#">About</a>
            </li>
            <li className="hover:bg-blue-600 font-bold md:hover:bg-transparent p-4 md:p-0">
              <a href="#">Services</a>
            </li>
            <li className="hover:bg-blue-600 font-bold md:hover:bg-transparent p-4 md:p-0">
              <a href="#">Contact</a>
            </li>
            <li className="hover:bg-blue-600 font-bold md:hover:bg-transparent p-4 md:p-0">
              <a href="/brands">Brands</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

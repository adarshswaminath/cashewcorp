import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./style/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const subProduct = () => (
    <div className="capitalize text-xs absolute hidden bg-white/10 bg:blur backdrop-blur text-black py-2 space-y-2 w-40 p-3 top-full left-0 group-hover:grid transition transform ease-in-out duration-300">
      <Link
        className="hover:bg-white p-2 border-0 hover:border hover:border-[#FF1E1E] text-base"
        to="/product"
      >
        CDC Brand Products
      </Link>
      <Link
        className="bg-red-600 text-white rounded-lg hover:bg-red-400 border-[#FF1E1E] btn"
        to="/product"
      >
        Online Shopping
      </Link>
    </div>
  );

  const SubMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="capitalize text-xs absolute hidden bg-white/10 bg:blur backdrop-blur text-black py-2 space-y-2 w-40 p-3 top-full left-0 group-hover:grid transition transform ease-in-out duration-300"
    >
      <Link
        className="hover:bg-white p-2 border-0 hover:border hover:border-[#FF1E1E]"
        to="/kscdc"
      >
        KSCDC
      </Link>
      <Link
        className="hover:bg-white p-2 border-0 hover:border hover:border-[#FF1E1E]"
        to="/org"
      >
        Organization
      </Link>
      <Link
        className="hover:bg-white p-2 border-0 hover:border hover:border-[#FF1E1E]"
        to="/director-board"
      >
        Board Of Directors
      </Link>
      <Link
        className="hover:bg-white p-2 border-0 hover:border hover:border-[#FF1E1E]"
        to="/management"
      >
        Management
      </Link>
      <Link
        className="hover:bg-white p-2 border-0 hover:border hover:border-[#FF1E1E]"
        to="/product-characteristic"
      >
        Product Characteristics
      </Link>
      <Link
        className="hover:bg-white p-2 border-0 hover:border hover:border-[#FF1E1E]"
        to="/franchisee"
      >
        Franchisee
      </Link>
      <Link
        to="/blog"
        className="bg-red-600 text-white rounded-lg hover:bg-red-400 border-[#FF1E1E] btn"
      >
        What's New
      </Link>
    </motion.div>
  );

  return (
    <nav className="h-28 border lg:rounded-[12px] bg-white text-black uppercase w-full flex items-center justify-evenly z-50">
      {/* image logo */}
      <div className="logo flex items-center">
        <img src="/images/logo.png" className="h-12 lg:h-36" alt="Logo" />
        <div>
          <h3 className="font-bold max-w-md">
            The kerala state cashew development corporation ltd
          </h3>
          <p className="text-xs text-gray-800 font-semibold">
            (A Government of Kerala Undertaking)
          </p>
        </div>
      </div>
      {/* navbar content */}
      <div className="hidden lg:flex space-x-2 items-center ">
        <Link
          to="/"
          className={`${
            path === "/" ? "text-[#FF1E1E]" : ""
          } text-xs hover:text-[#FF1E1E] decoration-wavy decoration-red-400 font-bold`}
        >
          Home
        </Link>
        <div className="relative group">
          <Link
            to="/kscdc"
            className=" text-xs cursor-pointer flex items-center space-x-2 font-bold"
          >
            About Us
            {/* down sv */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:opacity-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>
          {SubMenu()}
        </div>
        <div className="relative group">
          <Link
            className={`${
              path === "/product" ? "text-[#FF1E1E]" : ""
            } text-xs hover:text-[#FF1E1E] decoration-wavy decoration-red-400 font-bold flex items-center`}
          >
            Product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:opacity-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>
          {subProduct()}
        </div>
        <Link
          to="/tender"
          className={`${
            path === "/tender" ? "text-[#FF1E1E]" : ""
          } text-xs hover:text-[#FF1E1E] decoration-wavy decoration-red-400 font-bold`}
        >
          Tender
        </Link>
        <Link
          to="/career"
          className={`${
            path === "/career" ? "text-[#FF1E1E]" : ""
          } text-xs hover:text-[#FF1E1E] decoration-wavy decoration-red-400 font-bold`}
        >
          Career
        </Link>
        <Link
          to="/rti"
          className={`${
            path === "/rti" ? "text-[#FF1E1E]" : ""
          } text-xs hover:text-[#FF1E1E] decoration-wavy decoration-red-400 font-bold`}
        >
          RTI
        </Link>
        <Link
          to="/gallery"
          className={`${
            path === "/gallery" ? "text-[#FF1E1E]" : ""
          } text-xs hover:text-[#FF1E1E] decoration-wavy decoration-red-400 font-bold`}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className={`${
            path === "/contact" ? "text-[#FF1E1E]" : ""
          } text-xs hover:text-[#FF1E1E] decoration-wavy decoration-red-400 font-bold`}
        >
          Contact
        </Link>
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          <CiMenuFries className="text-black m-3 text-2xl" />
        </button>
      </div>
      {/* shop Now Button */}
      <div className="ml-5 hidden lg:flex flex-col items-center">
        <div className="relative">
          <Link
            to="/product"
            className=" rounded flex items-center justify-center  top-0 right-2 relative"
          >
            <button className="flex items-center gap-2 font-bold bg-[#FF1E1E] hover:bg-red-400 p-2 rounded-lg text-white">
              Shop Now
              <FaShoppingCart />
            </button>
          </Link>
          <div className="">
            <img
              src="/images/CDC.png"
              className="left-1 bg-white rounded-full absolute h-24"
              alt="CDC Logo"
            />
          </div>
        </div>
      </div>
      {/* mobile view */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center z-50"
          >
            <button
              onClick={toggleMenu}
              className="text-2xl absolute top-2 right-3 focus:outline-none"
              aria-label="Close Menu"
            >
              <RxCross2 />
            </button>
            <img src="/images/CDC.png" className="h-16" alt="CDC Logo" />

            <Link
              to="/"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Home
            </Link>
            <Link
              to="/kscdc"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              About us
            </Link>
            <Link
              to="/management"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Management
            </Link>
            <Link
              to="/org"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Organization
            </Link>
            <Link
              to="/product-characteristic"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Product Characteristic
            </Link>
            <Link
              to="/franchisee"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Franchisee
            </Link>
            <Link
              to="/product"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Product
            </Link>
            <Link
              to="/director-board"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Board Of Directors
            </Link>
            <Link
              to="/tender"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Tender
            </Link>
            <Link
              to="/career"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Career
            </Link>
            <Link
              to="/rti"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              RTI
            </Link>
            <Link
              to="/gallery"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="text-xl font-bold mt-3 hover:text-[#FF1E1E] decoration-wavy decoration-red-400"
            >
              What's New
            </Link>
            <Link to="/product">
              <button className="flex items-center text-xl btn m-3 rounded-lg bg-[#FF1E1E] hover:bg-red-400 text-white">
                Shop Now
                <FaShoppingCart />
              </button>
            </Link>
            <button
              onClick={toggleMenu}
              className="mt-3 rounded-full bg-[#FF1E1E] text-white p-3"
            >
              <RxCross2 />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

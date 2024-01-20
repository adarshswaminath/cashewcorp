import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./style/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const SubMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute hidden bg-white text-black py-2 space-y-2 w-40 p-3 top-full left-0 group-hover:grid "
    >
      <Link to="/kscdc">KSCDC</Link>
      <Link to="/executives">Executives</Link>
      <Link to="/franchisee">Franchisee</Link>
      <Link
        to="/whats-new"
        className="bg-red-600 text-white rounded-lg hover:bg-red-400 btn"
      >
        What's New
      </Link>
    </motion.div>
  );

  return (
    <div className="h-28 border lg:rounded-[12px] bg-white text-black uppercase w-full flex items-center justify-evenly">
      {/* image logo */}
      <div className="logo">
        <img src="/images/logo-1.png" className="h-12 lg:h-20" alt="Logo" />
      </div>
      {/* navbar content */}
      <div className="hidden lg:flex items-center space-x-5">
        <Link
          to="/"
          className="hover:underline decoration-wavy decoration-red-400 font-bold"
        >
          Home
        </Link>
        <div className="relative group">
          <Link
            to="/"
            className="cursor-pointer flex items-center space-x-2 font-bold"
          >
            About Us
            {/* down sv */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 group-hover:opacity-0"
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
        <Link
          to="/product"
          className="hover:underline decoration-wavy decoration-red-400 font-bold"
        >
          Product
        </Link>
        <Link
          to="/tender"
          className="hover:underline decoration-wavy decoration-red-400 font-bold"
        >
          Tender
        </Link>
        <Link
          to="/career"
          className="hover:underline decoration-wavy decoration-red-400 font-bold"
        >
          Career
        </Link>
        <Link
          to="/rti"
          className="hover:underline decoration-wavy decoration-red-400 font-bold"
        >
          RTI
        </Link>
        <Link
          to="/gallery"
          className="hover:underline decoration-wavy decoration-red-400 font-bold"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="hover:underline decoration-wavy decoration-red-400 font-bold"
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
      <div className="hidden lg:flex flex-col items-center">
        <img src="/images/CDC.png" className="h-16" alt="CDC Logo" />
        <Link
          to="/product"
          className="h-full  rounded flex items-center justify-center  top-0 right-2 relative"
        >
          <button className="flex items-center gap-2 font-bold bg-red-500 hover:bg-red-400 p-2 rounded-lg text-white">
            Shop Now
            <FaShoppingCart />
          </button>
        </Link>
      </div>
      {/* mobile view */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center"
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
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              About us
            </Link>
            <Link
              to="/executives"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              Executives
            </Link>
            <Link
              to="/franchisee"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              Franchisee
            </Link>
            <Link
              to="/product"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              Product
            </Link>
            <Link
              to="/tender"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              Tender
            </Link>
            <Link
              to="/career"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              Career
            </Link>
            <Link
              to="/rti"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              RTI
            </Link>
            <Link
              to="/gallery"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-xl font-bold mt-3 hover:underline decoration-wavy decoration-red-400"
            >
              Contact
            </Link>
            <Link to="/product">
              <button className="flex items-center text-xl btn m-3 rounded-lg bg-red-500 hover:bg-red-400 text-white">
                Shop Now
                <FaShoppingCart />
              </button>
            </Link>
            <button
              onClick={toggleMenu}
              className="mt-3 rounded-full bg-red-500 text-white p-3"
            >
              <RxCross2 />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

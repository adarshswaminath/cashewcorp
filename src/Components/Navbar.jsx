import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";
function Navbar() {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className="navbar bg-transparent z-50">
      <div className="navbar-start">
        <div className="dropdown" onClick={() => setIsShow((prev) => !prev)}>
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            {isShow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>
          {isShow ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-medium"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/tender">Tender</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/rit">RIT</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="flex-col items-center">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              className="h-20 lg:h-36 hidden lg:block"
              alt="Logo Image"
            />
            <div>
              <h1 className="text-lg font-bold">
                THE KERALA STATE CASHEW <br /> DEVELOPMENT CORPORATION LTD
              </h1>
              <p>(A Government of Kerala Undertaking)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:navbar-end hidden lg:grid">
        <div className="flex gap-2 items-end justify-end">
          <img src="/images/CDC.png" className="h-12 flex" alt="CDC" />
          <img src="/images/gov.png" className="h-12 flex" alt="GOV" />
        </div>
        <ul className="menu menu-horizontal px-1 text-black font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/tender">Tender</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/rit">RIT</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <img
          src="/images/logo.png"
          className="h-20 lg:h-28 block lg:hidden"
          alt="Logo Image"
        />
      </div>
    </nav>
  );
}

export default Navbar;

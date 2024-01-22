import React from "react";

function Client() {
  return (
    <div className="mt-12 lg:mt-24 ">
      {/* backgriuynd image and search bar */}
      <div className="lg:relative">
        {/* search bar */}
        <div className="flex items-center justify-center">
          <div className="lg:absolute h-24 bg-red-500 w-full lg:w-3/4 text-white grid lg:flex items-center justify-evenly">
            <h2 className="font-bold text-xl text-balance">
              Subscribe For Latest
              <br className="hidden lg:block" />
              Newsletter
            </h2>
            <div className="flex items-center relative">
              <input type="email" placeholder="Your Email" className="input" />
              <button className="btn absolute right-0 bg-red-500 hover:bg-red-600 text-white">
                Search
              </button>
            </div>
          </div>
        </div>
        {/* background image */}
        <img
          src="/images/hero-1.jpg"
          className="h-44 w-full object-cover"
          alt="banner image"
        />
      </div>
    </div>
  );
}

export default Client;

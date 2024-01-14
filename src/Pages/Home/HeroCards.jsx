import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import {MdProductionQuantityLimits } from "react-icons/md"
import { AiOutlineShop } from "react-icons/ai";

let cardData = [
    {title: "50+ Products",body: "We focus on ergonomics and meeting you where you work ",icon:<MdProductionQuantityLimits/>},
    {title: "50+ Outlets",body: "Just type what's in your mind and we'll get you there",icon:<AiOutlineShop/>},
    {title: "Government",body: "Reprehenderit ut ea consectetur aute irure sit esse.Out hell",icon:<FaBookOpen/>},
]


function HeroCards() {
  return (
    <div className="grid grid-cols-1 gap-3 md:flex justify-evenly lg:grid-cols-3 place-items-center justify-items-center">
      <div className="mt-8 text-center mx-auto flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-black max-w-3xl p-6 bg-white/10 bg:blur backdrop-blur">
            Cashews for Wealth,Health and for Prosperity
          </h2>
          <p className="text-balance -mt-0 mb-3  max-w-3xl font-bold text-black bg-white/10 bg:blur backdrop-blur ">
            Veniam Lorem commodo nulla dolore aliqua nostrud aliquip occaecat
            sint.Occaecat nulla commodo
          </p>
          <div className="flex items-center gap-2 mt-4">
            <button className="px-6 py-2 border bg-transparent bg-orange-500 hover:bg-transparent text-black hover:text-orange-500 border-orange-500 hover:border-orange-500 rounded-full">Get Started</button>
            <button className="px-6 py-2 border bg-transparent hover:bg-blue-500 rounded-full border-blue-500 hover:border-blue-500 text-blue-500 hover:text-white">Learn More</button>
          </div>
        </div>
    </div>
  );
}

export default HeroCards;

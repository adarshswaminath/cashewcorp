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
    <div className="lg:-mt-[10rem] grid grid-cols-1 gap-3  lg:grid-cols-3 place-items-center justify-items-center">
      {cardData.map((value) => (
        <div key={value.title} className=" bg-white hover:bg-blue-500 hover:text-white transition ease-in-out duration-200 hover:scale-110  w-96 shadow-xl group">
        <div className="card-body">
        <h1 className="card-title text-4xl text-blue-500 group-hover:text-white">{value.icon}</h1>
          <h2 className="card-title">{value.title}</h2>
          <p  className="text-gray-500 group-hover:text-white">{value.body}</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default HeroCards;

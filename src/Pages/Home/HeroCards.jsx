import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import {MdProductionQuantityLimits } from "react-icons/md"
import { AiOutlineShop } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


let cardData = [
    {title: "50+ Products",body: "We focus on ergonomics and meeting you where you work ",icon:<MdProductionQuantityLimits/>,link: "/product"},
    {title: "50+ Outlets",body: "Just type what's in your mind and we'll get you there",icon:<AiOutlineShop/>,link: "/franchisee"},
    {title: "Government",body: "ReprehendeRTI ut ea consectetur aute irure sit esse.Out hell",icon:<FaBookOpen/>,link: "/kscdc"},
]


function HeroCards() {
  return (
    <div  className="grid grid-cols-1 gap-3 md:flex justify-evenly lg:grid-cols-3 place-items-center justify-items-center">
      {cardData.map((value) => (
        <Link to={value.link} key={value.title}>
        <div data-aos="flip-left" key={value.title} className=" bg-white hover:bg-blue-500 hover:text-white transition ease-in-out duration-200 hover:scale-105  w-96 shadow-xl group">
        <div className="card-body">
        <div className="flex items-center justify-between">
        <h1 className="card-title text-4xl text-blue-500 group-hover:text-white">{value.icon}</h1>
        <h1 className="card-title text-xl text-blue-500 group-hover:text-white"><FaExternalLinkAlt/></h1>
        </div>
          <h2 className="text-gray-500 group-hover:text-white">{value.title}</h2>
          <p  className="text-gray-500 group-hover:text-white">{value.body}</p>
        </div>
      </div>
        </Link>
      ))}
    </div>
  );
}

export default HeroCards;

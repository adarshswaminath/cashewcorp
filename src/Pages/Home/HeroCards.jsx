import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import {MdProductionQuantityLimits } from "react-icons/md"
import { AiOutlineShop } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


let cardData = [
    {title: "60+ Products",body: "KSCDC's premium products are available in domestic and international markets with various grades and weights",icon:<MdProductionQuantityLimits/>,link: "/product"},
    {title: "120+ Outlets",body: "KSCDC operates 18+ factory outlets in our factories and 100+ franchise distribution outlets all over Kerala",icon:<AiOutlineShop/>,link: "/franchisee"},
    {title: "Govt. of Kerala",body: "KSCDC started in July1969 is a public sector undertaking fully owned by the Government of Kerala, playing a pivotal role in the cashew industry. ",icon:<FaBookOpen/>,link: "/kscdc"},
]


function HeroCards() {
  return (
    <div  className="grid grid-cols-1 gap-3 md:flex justify-evenly lg:grid-cols-3 place-items-center justify-items-center">
      {cardData.map((value) => (
        <Link to={value.link} key={value.title}>
        <div data-aos-duration="600" data-aos="flip-left" key={value.title} className=" bg-white hover:bg-blue-500 hover:text-white transition ease-in-out duration-200 hover:scale-105  w-96 shadow-xl group h-56">
        <div className="card-body">
        <div className="flex items-center justify-between ">
        <h1 className="card-title text-4xl text-blue-500 group-hover:text-white">{value.icon}</h1>
        <h1 className="card-title text-xl text-blue-500 group-hover:text-white"><FaExternalLinkAlt/></h1>
        </div>
          <h2 className="text-indigo-600 text-lg font-bold group-hover:text-white">{value.title}</h2>
          <p  className="text-gray-500 group-hover:text-white">{value.body}</p>
        </div>
      </div>
        </Link>
      ))}
    </div>
  );
}

export default HeroCards;

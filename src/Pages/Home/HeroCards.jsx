import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { enHeroCards } from "./Language/en";
import { mlHeroCards } from "./Language/ml";



function HeroCards({language}) {
  let data = language ? enHeroCards : mlHeroCards
  return (
    <div  className="grid grid-cols-1 gap-3 md:flex justify-evenly lg:grid-cols-3 place-items-center justify-items-center">
      {data.map((value) => (
        <Link to={value.link} key={value.title}>
        <div data-aos-duration="600" data-aos="flip-left" key={value.title} className=" bg-white hover:bg-blue-500 hover:text-white transition ease-in-out duration-200 hover:scale-105  w-96 shadow-xl group h-60">
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

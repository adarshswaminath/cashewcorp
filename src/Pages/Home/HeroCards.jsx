import React from "react";
import { FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { enHeroCards } from "./Language/en";
import { mlHeroCards } from "./Language/ml";
import useLanguageData from "../../Hook/useLanguageData";
import useGetApi from "../../Hook/useGetApi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import Loading from "../../Components/Loading";

// Define a mapping between title card ids and icons
const iconMap = {
  1: <MdProductionQuantityLimits />,
  2: <AiOutlineShopping />,
  3: <FaBookOpen />
};

function HeroCards() {
  const { response } = useGetApi("home");
  console.log(response);
  if (!response || !response.title_cards) {
    return <Loading/>
  }
  const data = useLanguageData(enHeroCards, mlHeroCards);

  return (
    <div className="p-2 h-72 grid grid-cols-1  gap-3  justify-evenly lg:grid-cols-3 place-items-center justify-items-center ">
      {response.title_cards.map((value) => (
        <Link to={value.link} key={value.title}>
          <div
            data-aos-duration="600"
            data-aos="flip-left"
            key={value.title}
            className="bg-white hover:bg-blue-500 hover:text-white transition ease-in-out duration-200 hover:scale-105 w-96 shadow-xl group h-72"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                {/* Use icon based on the id */}
                <h1 className="card-title text-4xl text-blue-500 group-hover:text-white">{iconMap[value.id]}</h1>
                <h1 className="card-title text-xl text-blue-500 group-hover:text-white"><FaExternalLinkAlt /></h1>
              </div>
              <h2 className="text-indigo-600 text-lg font-bold group-hover:text-white">{value.title}</h2>
              <p
                className="text text-gray-500 group-hover:text-white "
                // Check if body contains "1969" using regular expression
                dangerouslySetInnerHTML={{
                  __html: value.description.replace(
                    /(?<!\d)\b1969\b(?!\d)/g,
                    `<strong>1969</strong>` // Wrap "1969" in strong tags
                  ),
                }}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HeroCards;

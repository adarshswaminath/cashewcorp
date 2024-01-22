import React from "react";
// import "./style/usefullinks.css"
import "./style/usefullinks.css";
import { FaLink } from "react-icons/fa6";

const linksArray = [
  { name: "India Government", link: "https://India.gov.in" },
  { name: "ESIC India", link: "https://esic.gov.in/" },
  { name: "EPF India", link: "https://epfindia.gov.in/site_en/index.php" },
  { name: "Kerala Government", link: "https://kerala.gov.in" },
  {
    name: "Local Self Government Department",
    link: "https://lc.kerala.gov.in",
  },
  { name: "Chief Minister Office Kerala", link: "https://cmo.kerala.gov.in" },
  { name: "Kerala Chief Minister", link: "https://keralacm.gov.in/" },
  { name: "Cashew India", link: "http://cashewindia.org/" },
  { name: "Kerala Industry", link: "https://keralaindustry.org/" },
  {
    name: "Kerala Industry Department",
    link: "https://industry.kerala.gov.in/",
  },
  { name: "Cashew Capex", link: "https://cashewcapex.com/" },
  {
    name: "Economic Statistics Kerala",
    link: "https://ecostat.kerala.gov.in/",
  },
  { name: "Apprenticeship India", link: "https://apprenticeshipindia.gov.in/" },
  { name: "Kerala Cashew Board", link: "https://keralacashewboard.com/" },
];

const Card = ({ link }) => {
  return (
    <div className="cursor-pointer group bg-white hover:bg-red-500 hover:text-white shadow-lg  flex items-center justify-center p-4 mb-4 rounded-md">
      <a
        href={link}
        className="font-bold text-center flex items-center gap-3 text-transparent group-hover:text-white bg-gradient-to-r from-red-500 to-black bg-clip-text"
        target="_blank"
        rel="noopener noreferrer"
      >
        {new URL(link).hostname}
        <FaLink />
      </a>
    </div>
  );
};

function UseFulLinks() {
  const reversedLinksArray = linksArray.slice().reverse(); // Reverse the array

  return (
    <div className="container mx-auto mt-12 mb-2">
      <h2 className="text-sm lg:text-4xl font-bold text-center mb-6 text-red-500">
        Useful Links
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Excepteur ad ad nulla excepteur duis commodo labore sunt anim dolor.
      </p>

      <div className="grid gap-4 p-3 overflow-hidden place">
        <div className="marquee">
          <ul className="flex gap-3 ">
            {linksArray.map((value) => (
              <li className="">
                <Card link={value.link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseFulLinks;

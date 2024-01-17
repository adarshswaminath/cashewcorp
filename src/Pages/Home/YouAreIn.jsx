import React from "react";
import { FaLink } from "react-icons/fa6";

const linksArray = [
  { name: "India Government", link: "https://India.gov.in" },
  { name: "ESIC India", link: "https://esic.gov.in/" },
  { name: "EPF India", link: "https://epfindia.gov.in/site_en/index.php" },
  { name: "Kerala Government", link: "https://kerala.gov.in" },
  { name: "Local Self Government Department",link: "https://lc.kerala.gov.in",},
  { name: "Chief Minister Office Kerala", link: "https://cmo.kerala.gov.in" },
  { name: "Kerala Chief Minister", link: "https://keralacm.gov.in/" },
  { name: "Cashew India", link: "http://cashewindia.org/" },
  { name: "Kerala Industry", link: "https://keralaindustry.org/" },
  { name: "Kerala Industry Department",link: "https://industry.kerala.gov.in/" },
  { name: "Cashew Capex", link: "https://cashewcapex.com/" },
  { name: "Economic Statistics Kerala",link: "https://ecostat.kerala.gov.in/"},
  { name: "Apprenticeship India",link: "https://apprenticeshipindia.gov.in/",},
  { name: "Kerala Cashew Board", link: "https://keralacashewboard.com/" },
];

const Card = ({ index }) => {
  return (
    <div className="shadow-lg bg-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-6 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-lg flex items-center justify-center p-4 mb-4 rounded-md">
      <a
        href={linksArray[index].link}
        className="font-bold text-center flex items-center gap-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        {new URL(linksArray[index].link).hostname }
        <FaLink/>
      </a>
    </div>
  );
};

function YouAreIn() {
  const reversedLinksArray = linksArray.slice().reverse(); // Reverse the array

  return (
    <div className="container mx-auto mt-12 mb-2">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
        Useful Links
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Excepteur ad ad nulla excepteur duis commodo labore sunt anim dolor.
      </p>

      <div className="grid p-3 overflow-hidden">
    
        <div className="grid lg:grid-cols-5 gap-4 animate-none lg:animate-scroll">
          <Card index={0} />
          <Card index={1} />
          <Card index={2} />
          <Card index={3} />
          <Card index={4} />
        </div>
        
        <div className="grid lg:grid-cols-4 gap-4 ">
          <Card index={5} />
          <Card index={6} />
          <Card index={7} />
          <Card index={8} />
        </div>

         <div className="grid lg:grid-cols-3 gap-4">
          <Card index={9} />
          <Card index={10} />
          <Card index={11} />
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <Card index={12} />
          <Card index={13} />
        </div>
      </div>
    </div>
  );
}

export default YouAreIn;

import React from "react";

const linksArray = [
  { name: "Kerala Government", link: "https://www.kerala.gov.in" },
  {
    name: "Local Self Government Department",
    link: "https://lc.kerala.gov.in",
  },
  { name: "India Government", link: "https://India.gov.in" },
  { name: "Chief Minister Office Kerala", link: "https://cmo.kerala.gov.in" },
  { name: "Kerala Chief Minister", link: "https://keralacm.gov.in/" },
  { name: "Cashew India", link: "http://www.cashewindia.org/" },
  { name: "Kerala Industry", link: "https://www.keralaindustry.org/" },
  {
    name: "Kerala Industry Department",
    link: "https://industry.kerala.gov.in/",
  },
  { name: "Cashew Capex", link: "https://www.cashewcapex.com/" },
  {
    name: "Economic Statistics Kerala",
    link: "https://www.ecostat.kerala.gov.in/",
  },
  {
    name: "Apprenticeship India",
    link: "https://www.apprenticeshipindia.gov.in/",
  },
  { name: "ESIC India", link: "https://www.esic.gov.in/" },
  { name: "EPF India", link: "https://www.epfindia.gov.in/site_en/index.php" },
  { name: "Kerala Cashew Board", link: "https://keralacashewboard.com/" },
];

const Card = ({ index }) => {
  return (
    <div className="shadow-lg bg-white flex items-center justify-center p-4 mb-4 rounded-md">
      <a
        href={linksArray[index].link}
        className="font-bold text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linksArray[index].name}
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

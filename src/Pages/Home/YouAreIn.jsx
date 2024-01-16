import React from "react";

const imageData = [
  { image: "/images/gov.png", link: "https://www.kerala.gov.in/" },
  {
    image:
      "https://keralacm.gov.in/wp-content/uploads/2021/05/cmonewlatestlogo4.png",
    link: "https://keralacm.gov.in/",
  },
  {
    image: "http://cashewindia.org/images/logo.jpg",
    link: "http://cashewindia.org/",
  },
  {
    image: "https://www.keralaindustry.org/images/logo/logo-01.png",
    link: "https://www.keralaindustry.org",
  },
  {
    image: "https://www.ecostat.kerala.gov.in/logos/eng-dark-logo.png",
    link: "https://www.ecostat.kerala.gov.in",
  },
  {
    image:
      "https://www.apprenticeshipindia.gov.in/assets/images/skill-india-logo-copy_3x.png",
    link: "https://www.apprenticeshipindia.gov.in",
  },
  {
    image:
      "https://www.apprenticeshipindia.gov.in/assets/images/naps_logo_final.png",
    link: "https://www.apprenticeshipindia.gov.in/",
  },
  {
    image: "https://www.epfindia.gov.in/images/EPFO_Logo.png",
    link: "https://www.epfindia.gov.in",
  },
];

const Image = ({index,height,width}) => {
  return (
    <a href={imageData[index].link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center p-2">
      <img
        className={`w-full ${height} ${width} object-cover object-center`}
        src={imageData[index].image}
        alt="Logo image"
      />
    </a>
  );
};

function YouAreIn() {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
        You're in a good company
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Excepteur ad ad nulla excepteur duis commodo labore sunt anim dolor.
      </p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Image index={0} height="96" width="w-12"/>
        <Image index={5} height="96" width="w-12"/>
        <Image index={7} height="96" width="w-12"/>
        <Image index={3} height="96" width="w-12"/>
        <Image index={4} height="96" width="w-12"/>
        <Image index={1} height="96" width="w-12"/>
        <Image index={6} height="96" width="w-12"/>
        <Image index={2} height="96" width="w-12"/>



      </div>
    </div>
  );
}

export default YouAreIn;

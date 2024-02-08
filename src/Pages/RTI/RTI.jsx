import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import Accordion from "../../Components/Accordion"
import RITCard from "./RITCard";


const RTI = () => {
  const data = [
    "INFORMATION OFFICERS AND APPELLATE AUTHORITY",
    "MODE OF PAYMENT OF FEES UNDER RIGHT TO INFORMATION ACT, 2005",
    "SUO MOTO DISCLOSURE",
    "RIGHT TO INFORMATION ACT, 2005",
    "ORGANIZATIONAL STRUCTURE",
    "OUR FACTORIES – NAME OF MANAGERS AND PHONE NUMBERS",
    "STAFF RULES",
    "CERTIFIED STANDING ORDER",
    "IRC SETTLEMENT – COPY",
    "PAY SCALE",
    "MINIMUM WAGE NOTIFICATION – 2011",
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-6 bg-gray-100">
        <Banner image="rit.jpg" />
      </div>

     <div className="px-12">
     {data.map((_,index) => (
        <Accordion key={index} title={data[index]} content={<RITCard/>} />
      ))}
     </div>

      {/* <div className="mt-6 flex flex-col gap-4 items-center mb-2">
        {contacts.map((contact, index) => (
          <div key={index} className="">
            <ContactCard {...contact} />
          </div>
        ))}
      </div> */}
      <Footer />
    </div>
  );
};

export default RTI;

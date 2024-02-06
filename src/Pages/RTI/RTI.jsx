import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";

const ContactCard = ({ title, name, address, mobile }) => (
  <div  className="flex group">
    <div className="w-96 bg-white group-hover:bg-indigo-500 group-hover:rounded-xl group-hover:text-white transition duration-300 transform group-hover:scale-105 p-6">
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
    <div className="w-96 bg-gray-200 p-6 flex flex-col items-start">
      <span>{name}</span>
      <span>{address}</span>
      <span>{mobile}</span>
    </div>
  </div>
);

const RTI = () => {
  const contacts = [
    {
      title: "State Public information officer",
      name: "Shri. Ajith S (Personal Manager)",
      address: "The Kerala State Cashew Development Corporation Ltd, Cashew House, Post Box No.13, Kollam-691001, India",
      mobile: "(Mob:8281114648)",
    },
    {
      title: "Assistant Public information officer",
      name: "Shri. Rajesh Prathap (Superintendent)",
      address: "The Kerala State Cashew Development Corporation Ltd, Cashew House, Post Box No.13, Kollam-691001, India",
      mobile: "(Mob:9495553535)",
    },
    {
      title: "Appellate authority",
      name: "Shri. Sunil John K (Managing Director)",
      address: "The Kerala State Cashew Development Corporation Ltd, Cashew House, Post Box No.13, Kollam-691001, India",
      mobile: "(Mob: 9847071750)",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-6 bg-gray-100">
        <Banner image="rit.jpg" />
      </div>
      <div className="mt-6 flex flex-col gap-4 items-center mb-2">
        {contacts.map((contact, index) => (
          <div key={index} className="">
            <ContactCard {...contact} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default RTI;

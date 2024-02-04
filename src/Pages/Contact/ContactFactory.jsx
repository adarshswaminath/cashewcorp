
import React, { useState } from 'react';
import { factoriesData } from "../Org";
import { FaExternalLinkAlt } from "react-icons/fa";
import Banner from '../../Components/Banner';

const accordion = [
  {
    id: 1,
    title: "Factory Contact Details",
    content: <FactoryContactTable/>
  },
  {
    id: 2,
    title: "Title of the second",
    content: "Something should"
  },
  {
    id: 3,
    title: "Title of the third",
    content: "Something should"
  },
]


const ContactFactory = () => {
  return(
  <div>
    <Banner image={"office.jpg"}/>
    <div className='p-5'>
      {accordion.map((data) => (
        <Accordion
          key={data.id}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  </div>
  )
};


// accordion 
 function Accordion({title,content}){
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border  rounded-lg bg-[#0757A9]   mb-2">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className={`transform text-white ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          {content}
        </div>
      )}
    </div>
  );
}




// list factory contact details
function FactoryContactTable() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter factories based on location
  const filteredFactories = factoriesData.filter((factory) =>
    factory.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      {/* Contact email table */}
      <h3 className="text-xl font-bold mb-2">
        Contact details of our 30 factories
      </h3>
      {/* Search input for filtering factories based on location */}
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search by location
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by location"
          className="p-2 border rounded-md w-full outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full ">
          {/* head */}
          <thead className="bg-red-500 text-white sticky">
            <tr>
              <th className="border p-2">Sl.No</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Phone Number</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {filteredFactories.map((value, index) => (
              <tr
                className={`${index % 2 == 0 ? "bg-red-300" : "bg-red-200"}`}
                key={value.factoryNo}
              >
                <th className="border p-2">{value.factoryNo}</th>
                <td className="border p-2">
                  <a
                    href="https://www.google.com"
                    className="flex gap-3 items-center"
                    target="_blank"
                  >
                    {value.location}
                    <FaExternalLinkAlt className="text-base" />
                  </a>
                </td>
                <td className="border p-2">{value.phoneNumber}</td>
                <td className="border p-2">{value.email}</td>
                <td className="border p-2">Open</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactFactory;

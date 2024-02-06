import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";

const ContactCard = ({ title, name, address, mobile }) => (
  <div  className="flex group">
    <div className="w-96 hidden lg:flex bg-white group-hover:bg-indigo-500 group-hover:rounded-xl group-hover:text-white transition duration-300 transform group-hover:scale-105 p-6">
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
    <div className="w-96 bg-gray-200 p-6 flex flex-col items-start">
    <h3 className="font-bold text-xl flex lg:hidden mb-2">{title}</h3>
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


  const data = ["INFORMATION OFFICERS AND APPELLATE AUTHORITY",
  "MODE OF PAYMENT OF FEES UNDER RIGHT TO INFORMATION ACT, 2005",
  "SUO MOTO DISCLOSURE",
  "RIGHT TO INFORMATION ACT, 2005",
  "ORGANIZATIONAL STRUCTURE",
  "OUR FACTORIES – NAME OF MANAGERS AND PHONE NUMBERS",
  "STAFF RULES",
  "CERTIFIED STANDING ORDER",
  "IRC SETTLEMENT – COPY",
  "PAY SCALE",
  "MINIMUM WAGE NOTIFICATION – 2011"
  ]
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-6 bg-gray-100">
        <Banner image="rit.jpg" />
      </div>
      <h3 className="p-5 text-3xl font-bold text-center">Right To Information</h3>
      <div className="overflow-x-auto p-5 ">
  <table className="table">
    {/* head */}
    <thead>
      
     
    </thead>
  <div className="p-3">
  <tbody className="flex flex-col  justify-center">
      {/* row 1 */}
      {data.map((value,index) => (
        <tr className={`transition duration-300 hover:scale-105 ${index %2 ==0 ? "bg-red-300" :"bg-red-200"}`}>
        <th>{index+1}</th>
        <td>{data[index]}</td>
      </tr>
      ))}
      {/* row 2 */}
  
    </tbody>
  </div>
  </table>
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

import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "../Home/style/home.css";
import Footer from "../../Components/Footer"
import DefaultContact from "./DefaultContact";
import ContactFactory from "./ContactFactory";

function ContactInfoBox() {
  return (
    <div className="bg-white p-12 shadow-lg">
      <div className="flex gap-3">
        <div className="h-12 w-12 bg-red-400 flex items-center justify-center rounded-full shadow-lg">
          <AiOutlineMail className="text-2xl text-white" />
        </div>
        <div className="grid">
          <h3 className="text-[#FF1E1E]">Drop a line</h3>
          <h3 className="font-bold">Mail Us</h3>
          <a href="#">Support@gmail.com</a>
          <a href="#">Support@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [currentPage,setCurrentPage] = useState("default")
  const section = () => {
    switch (currentPage) {
      case "default":
         return <DefaultContact/>
      case "factory":
          return <ContactFactory/>
    
      default:
        return <DefaultContact/>;
    }
  }

  return (
    <main className="about ">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3  gap-3 lg:flex items-center justify-center space-x-3 mt-4 mb-4">
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${currentPage === "default" ? 'bg-[#FF1E1E] text-white' : "bg-transparent" }`} onClick={() => setCurrentPage("default")}>Contact</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${currentPage === "factory" ? 'bg-[#FF1E1E] text-white' : "bg-transparent" }`} onClick={() => setCurrentPage("factory")}>Factories</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${currentPage === "headquaters" ? 'bg-[#FF1E1E] text-white' : "bg-transparent" }`} onClick={() => setCurrentPage("headquaters")}>Head Quaters</button>
        </div>
        <span className="text-gray-500">Contact Us</span>
        <h1 className="text-2xl lg:text-4xl text-balance max-w-md tracking-wider text-center font-bold">
          Feel <span className="text-[#FF1E1E]">Free to Contact</span> With Us
        </h1>
        {/* cards */}
       </div>
       {/* contact Sections */}
       <div className="p-3">
       {section()}
       </div>
      <Footer/>
    </main>
  );
}

export default Contact;

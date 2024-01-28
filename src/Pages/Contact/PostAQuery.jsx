import React from "react";
import { FaPhoneAlt, FaEnvelope, FaBuilding } from 'react-icons/fa';

const PostAQuery = () => {
  return (
    <div className="lg:flex  w-full">
      <div className="w-full border border-error rounded-r-2xl flex flex-col items-center justify-center text-center lg:w-2/5 bg-white p-3 ">
        {/* contact details */}
        <h2 className="text-4xl font-bold">Contact Details</h2>
        <p className="text-2xl mt-2 mb-3 font-bold">The Kerala State Cashew Development Corporation Limited</p>
        <hr className="border border-red-400 w-full"/>
        <div className="mt-6 mb-6 max-w-md">
          <p className="text-xl">
            (A Government of Kerala Undertaking), Cashew House, Mundakkal,
            Kollam, Kerala, India - 691 001
          </p>
        </div>
        <hr className="border border-red-400 w-full"/>
        {/* contact number */}
        <div className="mt-6 flex flex-col items-center text-lg">
          <p className="flex gap-2 items-center">
          <FaPhoneAlt/> +91 474 2742271, 2742172,2742273, 2742954
          </p>
          <p>Gram: 'KASUVANDI' </p>
          <p className="flex gap-2 items-center"> <FaEnvelope/> kscdc@kerala.gov.in  <FaEnvelope/> ho@cashewcorporation.com </p>
          <p>CIN:U15493KL1969SGC002234</p>
        </div>
      </div>
      {/* form */}
      <div className="w-full lg:w-3/5 bg-white border border-error p-2 justify-center flex flex-col rounded-l-2xl">
        <form className="p-6 mx-auto gap-2 bg-white rounded flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl">Submit Your Message</h2>
          <div className="grid lg:flex items-center gap-2 w-full">
            <input type="text" className="input bg-gray-200 w-full" placeholder="Name" />
            <input type="tel" className="input bg-gray-200 w-full" placeholder="Phone" />
          </div>
          <input type="email" placeholder="Email" className="w-full input bg-gray-200" />
          <textarea className="textarea bg-gray-200 w-full" cols="40" rows="5" placeholder="Address"></textarea>
          <textarea className="textarea bg-gray-200 w-full" cols="40" rows="5" placeholder="Message"></textarea>
          <button className="btn bg-red-400 hover:bg-red-300 text-white">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PostAQuery;

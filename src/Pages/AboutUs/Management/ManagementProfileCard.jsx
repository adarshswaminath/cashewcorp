import React from 'react';

function ManagementProfileCard({id, name, image, designation, phone_number_one,phone_number_two,phone_number_three }) {
  return (
    <div 
    data-aos={`${ id%2 ===0 ? "fade-left" : "fade-right" }`}
     className="w-full rounded-full border-indigo-600 overflow-hidden m-4 flex items-center justify-evenly border p-4 hover:border-red-500 hover:bg-red-300 transform ease-in-out transition hover:-translate-y-3 hover:scale-100 duration-300 delay-300 group">
      <img src={image} className="group-hover:hidden h-52 w-48 rounded-full" alt="manager_image_profile" />
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-500 group-hover:text-white">{name}</h1>
        <h3 className="text-sm text-gray-600">HOD ({designation})</h3>
        <ul className="mt-3 ">
    
            <li className="text-gray-700">{phone_number_one}</li>
            <li className="text-gray-700">{phone_number_two}</li>
            <li className="text-gray-700">{phone_number_three}</li>

        </ul>
      </div>
      <img src={image} data-aos="fade-up" className="hidden group-hover:block h-52 w-48 rounded-full transition-all duration-300 ease-in-out delay-500" alt="manager_image_profile" />
    </div>
  );
}

export default ManagementProfileCard;

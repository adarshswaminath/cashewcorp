import React from 'react';

function ManagementProfileCard({id, name, image, designation, contact }) {
  return (
    <div data-aos={`${ id%2 ===0 ? "fade-left" : "fade-right" }`} className="w-full rounded-lg overflow-hidden m-4 flex border p-4 hover:border-red-500 transform ease-in-out transition hover:-translate-y-3 hover:scale-100 duration-300 delay-100">
      <img src={image} className="w-40 h-40 rounded" alt="manager_image_profile" />
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-500">{name}</h1>
        <h3 className="text-sm text-gray-600">HOD ({designation})</h3>
        <ul className="mt-3 space-y-2">
          {contact.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManagementProfileCard;

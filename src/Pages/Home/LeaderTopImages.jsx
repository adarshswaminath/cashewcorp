import React from "react";

function LeaderTopImages() {
  return (
    <div className="mt-6 lg:mt-12 p-2 flex items-cemter justify-center gap-2">
      <div className="grid place-items-center">
        <img
          src="https://lc.kerala.gov.in/sites/default/files/styles/photo200x240/public/2021-08/cm.jpg?itok=5N70jXna"
          className="object-cover h-60 rounded-xl"
          alt="Main"
        />
        <p className="text-center text-gray-900">Name Of Person</p>
        <p className="text-center text-blue-500 font-bold">Chief Minister Of Kerala</p>
      </div>
      <div>
        <img
          src="https://minister-industries.kerala.gov.in/wp-content/uploads/2021/09/prajeev.jpg"
          className="object-cover h-60 rounded-xl"
          alt=""
        />
        <p className="text-center text-gray-900">Name Of Person</p>
        <p className="text-center text-blue-500 font-bold"> Minister Of Kerala</p>
      </div>
    </div>
  );
}

export default LeaderTopImages;

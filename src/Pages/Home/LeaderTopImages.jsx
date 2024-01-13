import React from "react";

function LeaderTopImages() {
  return (
    <div className="mt-6 lg:mt-12 p-2 items-cemter justify-evenly gap-2 lg:flex grid grid-cols-2">
      <div className="grid place-items-center ">
        <div>
        <img
          src="https://lc.kerala.gov.in/sites/default/files/styles/photo200x240/public/2021-08/cm.jpg?itok=5N70jXna"
          className="object-cover h-60 rounded-xl lg:-mt-20"
          alt="Main"
        />
        <p className="text-center text-gray-900">Name Of Person</p>
        <p className="text-center text-blue-500 font-bold">
        {" "}
          Chief Minister Of Kerala
        </p>
        </div>
      </div>
      <div>
        <img
          src="https://minister-industries.kerala.gov.in/wp-content/uploads/2021/09/prajeev.jpg"
          className="object-cover h-60 rounded-xl"
          alt=""
        />
        <p className="text-center text-gray-900">Name Of Person</p>
        <p className="text-center text-blue-500 font-bold">
          {" "}
          Minister Of Kerala
        </p>
      </div>
      {/* central logo */}
      <img src="/images/CDC.png" className="h-60" alt="CDC logo" />
      {/* last card section */}
      {/* chairman message */}
      <div className="flex flex-col items-center card h-auto w-72 bg-gray-100">
        <h3 className="font-bold">Chairman Message</h3>
        <img
          src="/images/chairman.png"
          className="h-60 w-60 object-cover rounded-full"
          alt="Chairman Image"
        />
        <p className="text-balance text-center">
          Amet nostrud excepteur in labore ex adipisicing sunt consectetur irure
          deserunt
        </p>
        <p className="mx-auto font-bold">Read More...</p>
      </div>
      {/* director message */}
      <div className="flex flex-col items-center card h-auto bg-gray-100 w-72">
        <h3 className="font-bold">Director Message</h3>
        <img
          src="/images/director.png"
          className="h-60 w-60 object-cover rounded-full"
          alt="Chairman Image"
        />
        <p className="text-balance text-center">
          Amet nostrud excepteur in labore ex adipisicing sunt consectetur irure
          deserunt.
        </p>
        <p className="mx-auto font-bold">Read More...</p>
      </div>
    </div>
  );
}

export default LeaderTopImages;

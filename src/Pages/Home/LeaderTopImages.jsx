import React from "react";

const leaderData = [
  {
    name: "Name Of Person 1",
    position: "Chief Minister Of Kerala",
    image:
      "https://lc.kerala.gov.in/sites/default/files/styles/photo200x240/public/2021-08/cm.jpg?itok=5N70jXna",
  },
  {
    name: "Name Of Person 2",
    position: "Minister Of Kerala",
    image:
      "https://minister-industries.kerala.gov.in/wp-content/uploads/2021/09/prajeev.jpg",
  },
  {
    name: "Name Of Person 3",
    position: "Chairman",
    image: "/images/chairman.png",
  },
  {
    name: "Name Of Person 4",
    position: "Director",
    image: "/images/director.png",
  },
];

function LeaderTopImages() {
  return (
    <div className="flex items-center justify-center -mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 lg:mt-12 p-2">
      {leaderData.map((leader, index) => (
        <div key={index} className="text-center flex flex-col items-center">
          <img
            src={leader.image}
            className="object-conatin h-52 w-52 rounded-md mb-2"
            alt={leader.name}
          />
          <p className="text-gray-900 font-bold">{leader.name}</p>
          <p className="text-blue-500">{leader.position}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default LeaderTopImages;

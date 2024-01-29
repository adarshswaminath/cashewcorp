import React from "react";
import "./style/topleader.css"
import ProfileCard from "../../Components/ProfileCard";

const leaderData = [
  {
    name: "Shri. Pinarayi Vijayan",
    position: "Hon'ble Chief Minister",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
    message: "Ullamco aliquip veniam nostrud enim excepteur eiusmod. Consectetur sint fugiat dolore fugiat ad ad adipisicing non anim proident. Nostrud pariatur occaecat commodo quis sit commodo. Sint nostrud fugiat id incididunt consectetur ullamco dolore qui esse incididunt qui pariatur dolore officia. Elit aliquip cillum mollit anim non consectetur duis non. Est sunt id nisi aliqua cupidatat non veniam culpa duis pariatur velit eiusmod labore sit. Sint veniam proident deserunt est ad Lorem commodo amet nisi aliquip Lorem aliquip.",
    image:
      "/images/cm.jpeg",
      title: "Hon. CM's Message"
  },
  {
    name: "Shri. P.Rajeeve",
    position: "Hon'ble Minister of Industries",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
    message: "Ex elit quis non qui tempor amet nisi laboris do cupidatat. Ea et excepteur consequat Lorem dolore occaecat velit in irure sunt do. Elit ea voluptate in et occaecat culpa officia et adipisicing excepteur mollit enim.",
    image:
      "https://minister-industries.kerala.gov.in/wp-content/uploads/2021/09/prajeev.jpg",
    title: "Hon. Minister's Message"
  },
  {
    name: "Shri. S.Jayamohan",
    position: "Chairman",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
    message: "Incididunt id velit consequat irure voluptate sunt velit minim magna reprehenderit eu. Voluptate eu enim laborum culpa cupidatat irure pariatur irure tempor adipisicing excepteur eu velit minim. Cupidatat velit cillum amet velit cupidatat quis dolor amet. Minim cillum officia dolor duis duis Lorem laboris incididunt nulla labore eiusmod.",
    image: "/images/chairman.png",
    title: "Chairman's Message"
  },
  {
    name: "Shri. Sunil John . K",
    position: "Managing Director",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
    message: "Laboris Lorem elit et ad non ullamco amet. Officia reprehenderit mollit nisi dolor qui pariatur pariatur deserunt velit officia anim culpa. Deserunt sit et veniam in ex occaecat ut veniam non Lorem dolore est aliquip amet. Pariatur deserunt cupidatat est culpa.",
    image: "/images/director.png",
    title: "Managing Director Message"
  },
];

function LeaderTopImages() {
  return (
    <div className="mt-4 box-wrapper grid gap-3 lg:grid-cols-4 place-items-center justify-items-center w-full">
         {leaderData.map((value,index) => (
          <ProfileCard
            key={index}
            name={value.name}
            image={value.image}
            position={value.position}
            content={value.content}
            title={value.title}
            link="/message"
          />
         ))}
    </div>
  );
}



export default LeaderTopImages;

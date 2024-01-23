import React from "react";
import "./style/topleader.css"
import ProfileCard from "../../Components/ProfileCard";

const leaderData = [
  {
    name: "Shri. Pinarayi Vijayan",
    position: "Hon'ble Chief Minister",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
    image:
      "https://www.pngitem.com/pimgs/m/571-5714583_pinarayi-vijayan-and-kamal-haasan-hd-png-download.png",
  },
  {
    name: "Shri. P.Rajeeve",
    position: "Hon'ble Minister of Industries",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
    image:
      "https://minister-industries.kerala.gov.in/wp-content/uploads/2021/09/prajeev.jpg",
  },
  {
    name: "Shri. S.Jayamohan",
    position: "Chairman",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
    image: "/images/chairman.png",
  },
  {
    name: "Shri. Sunil John . K",
    position: "Managing Director",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
    image: "/images/director.png",
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
          />
         ))}
    </div>
  );
}


{/* <figure key={value.name} className="shape-box shape-box_half">
          <img className="object-cover" src={value.image} alt={value.name}/>
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
          <figcaption>
              <div className="show-cont">
                  <h3 className="card-no">0{index+1}</h3>
                  <h4 className="card-main-title text-balance">{value.name}</h4>
                  <p>{value.position}</p>
              </div>
              <p className="card-content">Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.</p>
              <a href="#" className="read-more-btn">Read More</a>
          </figcaption>
          <span className="after"></span>
      </figure>  */}

export default LeaderTopImages;

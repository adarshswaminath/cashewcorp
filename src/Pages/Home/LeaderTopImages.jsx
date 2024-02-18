import React from "react";
import "./style/topleader.css"
import ProfileCard from "../../Components/ProfileCard";
import useLanguageData from "../../Hook/useLanguageData";
import { enleaderData } from "./Language/en";
import { mlleaderData } from "./Language/ml";

function LeaderTopImages() {

 const data = useLanguageData(enleaderData,mlleaderData)
  return (
    <div className="mt-4 box-wrapper grid md:grid-cols-2 gap-3 lg:grid-cols-4 place-items-center justify-items-center w-full">
         {data.map((value,index) => (
          <ProfileCard
            key={index}
            id={index+1}
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

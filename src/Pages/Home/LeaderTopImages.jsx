import React from "react";
import "./style/topleader.css"
import ProfileCard from "../../Components/ProfileCard";
import {useLanguage} from "../../contexts/LanguageContext"
import { enleaderData } from "./Language/en";
import { mlleaderData } from "./Language/ml";


function LeaderTopImages() {
  const {language} = useLanguage()
  const data = language ? enleaderData : mlleaderData

  return (
    <div className="mt-4 box-wrapper grid gap-3 lg:grid-cols-4 place-items-center justify-items-center w-full">
         {data.map((value,index) => (
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

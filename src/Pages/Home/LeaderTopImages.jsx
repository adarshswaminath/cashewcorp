import React from "react";
import "./style/topleader.css"
import ProfileCard from "../../Components/ProfileCard";
import useLanguageData from "../../Hook/useLanguageData";
import useGetApi from "../../Hook/useGetApi"
import { enleaderData } from "./Language/en";
import { mlleaderData } from "./Language/ml";
import { BACKEND_DOMAIN } from "../../utils";
import Loading from "../../Components/Loading";

function LeaderTopImages() {
  const {response} = useGetApi("home")
  if(!response || !response.person_cards){
    return <Loading/>
  }

 const data = useLanguageData(enleaderData,mlleaderData)
  return (
    <div className="mt-4 box-wrapper grid md:grid-cols-2 gap-3 lg:grid-cols-4 place-items-center  w-full">
         {response.person_cards.map((value,index) => (
          <ProfileCard
            key={index}
            id={index+1}
            name={value.name}
            image={BACKEND_DOMAIN+value.image}
            position={value.designation}
            content={value.description}
            title={value.title}
            link="/message"
          />
         ))}
    </div>
  );
}



export default LeaderTopImages;

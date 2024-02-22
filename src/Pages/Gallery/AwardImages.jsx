import React from 'react';
import useGetApi from "../../Hook/useGetApi"
import Loading from '../../Components/Loading';
function AwardImages() {
  const {response} = useGetApi("gallery")
  if(!response) {
    return <Loading/>
  }
  
  const awardData = response.filter((data) => data.category === "awards")
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 p-3 ">
      {awardData.map((award) => (
        <div data-aos="flip-up" key={award.id} className="flex flex-col items-center justify-center">
          <img src={award.images[0].image} alt={`Award ${award.id}`} className="mb-4" />
          <div className="text-center">
            <h3 className="text-lg font-bold">{award.title}</h3>
            <p>{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AwardImages;

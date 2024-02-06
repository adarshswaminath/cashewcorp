import ImageBackground from "./ImageBackground";
import "./style/home.css";

import { enAboutData } from "./Language/en";
import { mlAboutData } from "./Language/ml";
import { enMissionAndVision } from "./Language/en";
import { mlMissionAndVision } from "./Language/ml";
import useLanguageData from "../../Hook/useLanguageData";
import { Link } from "react-router-dom";

function About() {
  const data = useLanguageData(enAboutData,mlAboutData)
  const missionData = useLanguageData(enMissionAndVision,mlMissionAndVision)
  return (
    <div>
      <div className="">
        <div className="grid gap-4 lg:flex items-center gap-x-20 justify-between  m-6 about">
          <div className="">
          {data.map((about) => (
            <div
            key={about.title}
            data-aos="fade-right"
            className="flex flex-col items-start"
          >
            <div>
              <span className="text-2xl text-red-500 mb-6 border-l-2 px-2 font-bold border-red-500">
                {about.title}
              </span>
            </div>
            <h2 className=" text-xl max-w-md text-balance text-blue-500">
              {about.subtitle}{" "}
            </h2>
           <div className="text-pretty lg:w-[800px] ">
           <p className="  text-xl text-gray-700 mt-6 mb-6">
             {about.para_one}
            </p>
            <p className="  text-xl text-gray-700 mb-6">
              {about.para_two}
            </p>
            <p className="  text-xl text-gray-700 mb-6">
              {about.para_three}
            </p>
           </div>
           <Link to={"/kscdc"}>
           <button className="mt-4 px-5 py-2 bg-red-500 font-bold text-white uppercase transform -translate-y-0 hover:-translate-y-3 hover:scale-110 transition duration-300 ease-in-out hover:shadow-2xl">
              more about us
            </button>
           </Link>
          </div>
          ))}
          </div>
          <div>
            <div className="grid gap-4 grid-cols-2">
              <div
                data-aos="fade-right"
               
                className="h-56 w-full aspect-square bg-white shadow-lg flex items-center justify-center"
              >
                <h3 className="text-xl font-bold text-red-500 text-center">
                  News Updates
                </h3>
              </div>
              <div
                data-aos="fade-left"
             
                className="h-56 w-full aspect-square lg:mt-4 bg-white shadow-lg flex items-center justify-center"
              >
                <h3 className="text-xl font-bold text-red-500">Tender</h3>
              </div>
              <div
                data-aos="fade-up"
         
                className="h-56 w-full aspect-square bg-white shadow-lg flex items-center justify-center"
              >
                <h3 className="text-xl font-bold text-red-500  text-center">
                  News Updates
                </h3>
              </div>
              <div
                data-aos="fade-up"
          
                className="h-56 w-full aspect-square lg:mt-4 bg-white shadow-lg flex items-center justify-center"
              >
                <h3 className="text-xl font-bold text-red-500">Tender</h3>
              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <div>
          <div className="p-3">
            <div className="grid gap-3">
              {/* Company  Image with background */}
              <ImageBackground />

              <div>
                <div className="grid lg:flex justify-center items-center gap-8">
                  {/* Mission Card */}
                  {missionData.map((value) => (
                    <div
                    key={value.id}
                    data-aos={value.id %2 ==0 ? "fade-right" : "fade-left"}
                    className="p-6 h-72 bg-white w-full lg:max-w-md flex flex-col items-start rounded-lg shadow-md border-l-4 border-red-500 transform transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-3"
                  >
                    <h2 className="text-3xl font-bold mb-4">{value.title}</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {value.body}
                    </p>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

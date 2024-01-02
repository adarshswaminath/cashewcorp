import { MdOutlinePeopleAlt, MdOutlineAutoGraph } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

const cardData = [
  { icon: <MdOutlinePeopleAlt />, title: "500+", caption: "Staffs" },
  { icon: <MdOutlineAutoGraph />, title: "45K+", caption: "Happy Customers" },
  { icon: <IoMdTrophy />, title: "12+", caption: "Award Winning" },
  { icon: <BsFillSuitcaseLgFill />, title: "250 Cr+", caption: "profile" },
];

const ChooseCard = ({ icon, title, caption }) => {
    return (
      <div className="p-5 rounded-lg flex flex-col items-center ">
        <div className="text-blue-500 p-4">
          <h2 className="text-3xl lg:text-4xl">{icon}</h2>
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-center">{title}</h3>
        <p className="text-xs lg:text-sm uppercase text-gray-600 text-center">{caption}</p>
      </div>
    );
  };
  
function ChooseUs() {
  return (
    <div className="p-3">
      <h3 className="text-4xl font-bold uppercase m-4 text-center">
        why choose us
      </h3>
      <p className="text-center max-w-3xl mx-auto text-gray-500 font-bold">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics Newtonian mechanics
      </p>
      <div className="grid grid-cols-4 m-3 p-2">
        {cardData.map((value) => (
          <ChooseCard key={value.icon} icon={value.icon} title={value.title} caption={value.caption}/>
        ))}
      </div>
    </div>
  );
}

export default ChooseUs;

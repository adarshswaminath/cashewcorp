import { MdOutlinePeopleAlt, MdOutlineAutoGraph } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";
import {
  BsWhatsapp,
} from "react-icons/bs";
import UseFulLinks from "./UseFulLinks";


const cardData = [
  { image: "/images/directors/chairman.png", title: "Shri. S.Jayamohan", caption: "Chairman" },
  { image: "/images/directors/dir-1.png", title: "Shri. Sunil John .K", caption: "Managing Director" },
  { image: "/images/directors/dir-9.jpeg", title: "Shri. B. Pratheep Kumar", caption: "Director" },
  { image: "/images/directors/dir-10.jpeg", title: "Shri. Siju Jacob", caption: "Director" },
  { image: "/images/directors/dir-8.jpeg", title: "Dr. B S Suran", caption: "Director" },
  { image: "/images/directors/dir-4.jpeg", title: "Shri. B Sujeendran", caption: "Director" },
  { image: "/images/directors/dir-5.jpeg", title: "Shri. G. Babu", caption: "Director" },
  { image: "/images/directors/dir-7.jpeg", title: "Shri. Saji D. Anand", caption: "Director" },
  { image: "/images/directors/dir-6.jpeg", title: "Adv. Sooranadu S Sreekumar", caption: "Director" },
];



const ChooseCard = ({ image, title, caption }) => {
  return (
    <div data-aos="flip-down" className="relative flex flex-col items-center group">
      <img
        className="h-48 w-40 object-cover rounded-lg shadow-lg border border-blue-400 hover:scale-125 transition duration-300 ease-in-out"
        src={image}
        alt="Profile image"
      />
      <div className="relative -top-6 right-16 shadow-lg p-2 bg-white rounded-full transform transition ease-in-out delay-100 duration-300 group-hover:scale-125 group-hover:-translate-y-2">
        <BsWhatsapp />
      </div>
      <div className="relative text-center">
        <p className="font-bold text-red-600 uppercase">{title}</p>
        <p className="text-black">{caption}</p>
      </div>
    </div>
  );
};

function DirectorBoard() {
  return (
    <div>
      <div className="p-3">
      <h3 data-aos="fade-right" className="text-xl text-red-500 lg:text-2xl font-extrabold  m-4 text-center">
        Our Board Of Directors
      </h3>
      <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-16 mt-3 p-2">
        {cardData.map((value, index) => (
          <ChooseCard
            key={index}
            image={value.image}
            title={value.title}
            caption={value.caption}
          />
        ))}
      </div>
      </div>
      {/* <UseFulLinks/> */}
    </div>
    </div>
  );
}

export default DirectorBoard;

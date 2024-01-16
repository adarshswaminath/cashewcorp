import { MdOutlinePeopleAlt, MdOutlineAutoGraph } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";
import {
  BsFillSuitcaseLgFill,
  BsTwitch,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";
import YouAreIn from "./YouAreIn";

const cardData = [
  { image: "/images/directors/dir1.jpeg", title: "John Cooper", caption: "Creative Director" },
  { image: "/images/directors/dir2.jpeg", title: "Ronald Richard", caption: "Product Designer" },
  { image: "/images/directors/dir3.jpeg", title: "Brooklyn", caption: "Visual Designer" },
  { image: "/images/directors/dir4.jpeg", title: "Kristin", caption: "UX Designer" },
  { image: "/images/directors/dir5.jpeg", title: "Lesslie", caption: "Customer Manager" },
  { image: "/images/directors/dir6.jpeg", title: "Ralph", caption: "Business Director" },
  { image: "/images/directors/dir7.jpeg", title: "Ralph Edwards", caption: "Creative Director" },
  { image: "/images/directors/dir8.jpeg", title: "John Cooper", caption: "Creative Director" },
  { image: "/images/directors/dir9.jpeg", title: "John Cooper", caption: "Creative Director" },
  { image: "/images/directors/dir10.jpeg", title: "John Cooper", caption: "Creative Director" },



];



const ChooseCard = ({ image, title, caption }) => {
  return (
    <div className="relative flex flex-col items-center group">
      <img
        className="h-32 w-32 object-cover rounded-full shadow-lg"
        src={image}
        alt="Profile image"
      />
      <div className="relative -top-5 shadow-lg p-2 bg-white rounded-full transform transition ease-in-out delay-100 duration-300 group-hover:scale-125 group-hover:-translate-y-2">
        <BsTwitterX />
      </div>
      <div className="relative text-center">
        <p className="font-bold">{title}</p>
        <p className="text-gray-500">{caption}</p>
      </div>
    </div>
  );
};

function ChooseUs() {
  return (
    <div className="p-3">
      <h3 className="text-xl lg:text-2xl font-extrabold uppercase m-4 text-center">
        The Director Board
      </h3>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 mt-3 p-2">
        {cardData.map((value, index) => (
          <ChooseCard
            key={index}
            image={value.image}
            title={value.title}
            caption={value.caption}
          />
        ))}
      </div>
      <YouAreIn/>
    </div>
  );
}

export default ChooseUs;

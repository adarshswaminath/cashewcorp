import { MdOutlinePeopleAlt, MdOutlineAutoGraph } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";
import {
  BsFillSuitcaseLgFill,
  BsTwitch,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";

const cardData = [
  { image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "John Cooper", caption: "Creative Director" },
  { image: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Ronald Richard", caption: "Product Designer" },
  { image: "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Brooklyn", caption: "Visual Designer" },
  { image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Kristin", caption: "UX Designer" },
  { image: "https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Lesslie", caption: "Customer Manager" },
  { image: "https://images.pexels.com/photos/1370719/pexels-photo-1370719.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Ralph", caption: "Business Director" },
  { image: "https://images.pexels.com/photos/219550/pexels-photo-219550.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Ralph Edwards", caption: "Creative Director" },
  { image: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600", title: "John Cooper", caption: "Creative Director" },

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
        The creative team behind the door
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
    </div>
  );
}

export default ChooseUs;

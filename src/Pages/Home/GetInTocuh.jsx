import { BsSend } from "react-icons/bs";
import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
const getInTouchData = [
  { icon: <MdPhone />,firstMail: "georgia.young@example.com",secondMail: "georgia.young@ple.com" },
  { icon: <FaLocationPin />,firstMail: "georgia.young@example.com",secondMail: "georgia.young@ple.com" },
  { icon: <BsSend />,firstMail: "georgia.young@example.com",secondMail: "georgia.young@ple.com" },
];

function GetInTocuhCard({icon,firstMail,secondMail}) {
  return (
    <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg h-96 w-80 hover:scale-105 transition ease-in-out duration-200 hover:bg-gray-800 group">
      <h1 className="text-5xl lg:text-6xl text-sky-600 group-hover:text-white">
        {icon}
      </h1>
      <div className="text-center text-gray-600 group-hover:text-white m-3">
        <p>
          <a href="#">{firstMail}</a>
        </p>
        <p>
          {" "}
          <a href="#">{secondMail}</a>
        </p>
      </div>
      <h2 className="m-3 font-bold group-hover:text-white">Get Support</h2>
      <button className="btn border-orange-500 text-orange-500 px-[68px] bg-white group-hover:text-white group-hover:bg-transparent group-hover:border-white">
        Get Support
      </button>
    </div>
  );
}

function GetInTocuh() {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-100">
      <h3 className="text-4xl font-bold mb-6 text-center">Get In Touch.</h3>
      <p className="text-center max-w-3xl mx-auto text-gray-500 font-bold mb-10">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics Newtonian mechanics.
      </p>
      <div className="grid grid-cols-1 lg:flex gap-2 place-items-center justify-items-center justify-center items-center">
        {getInTouchData.map((value) => (
            <GetInTocuhCard
                key={value.icon}
                icon={value.icon}
                firstMail={value.firstMail}
                secondMail={value.secondMail}
            />
        ))}
      </div>
    </div>
  );
}

export default GetInTocuh;

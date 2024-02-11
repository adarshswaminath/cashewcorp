import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Banner from "../../../Components/Banner";
import ManagementProfileCard from "./ManagementProfileCard";
import { useLanguage } from "../../../contexts/LanguageContext";
import TranslateButton from "../../../Components/TranslateButton";

const seniorExecutives = [
  {
    id: 1,
    name: "Shri. Sunil John .K",
    image: "/images/executives/sr-1.jpg",
    designation: "Materials Manager",
    contact: [
      "8281114645(O)",
      "0474-2742271(Exn-35)(O)",
      "9495992008(M)",
      "mm@cashewcorporation.com",
    ],
  },
  {
    id: 2,
    name: "Shri. V. Shaji",
    image: "/images/executives/sr-2.jpg",
    designation: "Commercial Manager",
    contact: [
      "0474-2742271(Exn-47)(O)",
      "9847511950(M)",
      "cm@cashewcorporation.com",
    ],
  },
  {
    id: 3,
    name: "Shri. S. Ajith",
    image: "/images/executives/sr-3.jpg",
    designation: "Personnel Manager",
    contact: [
      "8281114648 (O)",
      "0474-2742271(Exn-48)(O)",
      "9400449587(M)",
      "pm@cashewcorporation.com",
    ],
  },
  {
    id: 4,
    name: "Shri. Raja Sankara Pillai",
    image: "/images/executives/sr-4.png",
    designation: "Finance Manager & Company Secretary",
    contact: [
      "8281114649(O)",
      "0474-2742271(Exn-49)(O)",
      "9840383950(M)",
      "fm@cashewcorporation.com",
    ],
  },
  {
    id: 5,
    name: "Shri.A.Gopakumar",
    image: "/images/executives/sr-5.jpg",
    designation: "Production Manager",
    contact: [
      "8281114637 (O)",
      "0474-2742271(Exn-46)(O)",
      "9947783524(M)",
      "prm@cashewcorporation.com",
    ],
  },
];

const managingDirector = seniorExecutives.filter(
  (md) => md.contact[3] === "mm@cashewcorporation.com"
);

function Management() {
  // const {language,setLanguage} = useLanguage()
  // const toggleLanguage = () => {
  //   setLanguage((prev) => !prev);
  // };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button> */}
      <Banner image="executives.jpg" />
      {/* senior executives */}
      <div className="flex-grow bg-gray-100">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Management
          </h2>
          <p className="text-center max-w-4xl mx-auto text-lg">
            The Kerala State Cashew Development Corporation Ltd. (KSCDC) is
            fully owned and managed by the Government of Kerala. The Core
            Management Team of the company is as follows.
          </p>
        </div>
        {/* md special section open */}
      <div className="relative flex flex-col items-center mt-24">
        <div className="bg-red-400 h-44 w-full"></div>
        <div className=" rounded-lg p-2 absolute -top-32" 
        // data-aos="fade-up"
        >
          {managingDirector.map((value,index) => (
            <div key={index} className="flex flex-col items-center text-white">
              <img src={value.image} className="h-44  rounded-b-full border-4 border-gray-100" alt="chairman_images" />
              <h2 className="text-2xl font-bold text-white ">{value.name}</h2>
              <p>Managing Director</p>
              <a href={`mailto: ${value.contact[3]}`} className="underline">{value.contact[3]}</a>
            </div>
          ))}
        </div>
      </div>
        {/* md special section close */}
        <div className="p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {seniorExecutives.map((management) => (
            <ManagementProfileCard key={management.id} {...management} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Management;

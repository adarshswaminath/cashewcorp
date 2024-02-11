import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Banner from "../../../Components/Banner";
import ManagementProfileCard from "./ManagementProfileCard";
import { useLanguage } from "../../../contexts/LanguageContext";
import TranslateButton from "../../../Components/TranslateButton";
import enManagement from "./enManagement.json";
import mlManagement from "./mlManagement.json";
import useLanguageData from "../../../Hook/useLanguageData";

function Management() {
  const data = useLanguageData(enManagement, mlManagement);
  const { language, setLanguage } = useLanguage();
  const managingDirector = data.filter(
    (md) => md.contact[3] === "mm@cashewcorporation.com"
  );
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <Banner image="executives.jpg" />
      {/* senior executives */}
      <div className="flex-grow bg-gray-100">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            {language ? "Our Management" : "ഞങ്ങളുടെ മാനേജ്മെന്റ്"}
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
          <div
            className=" rounded-lg p-2 absolute -top-32"
            // data-aos="fade-up"
          >
            {managingDirector.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white"
              >
                <img
                  src={value.image}
                  className="h-44  rounded-b-full border-4 border-gray-100"
                  alt="chairman_images"
                />
                <h2 className="text-2xl font-bold text-white ">{value.name}</h2>
                <p>{language ? "Managing Director" : "മാനേജിംഗ് ഡയറക്ടർ"}</p>
                <a href={`mailto: ${value.contact[3]}`} className="underline">
                  {value.contact[3]}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* md special section close */}
        <div className="p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {data.map((management) => (
            <ManagementProfileCard key={management.id} {...management} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Management;

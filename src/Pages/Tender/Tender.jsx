import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import TenderTable from "./TenderTable";
import Banner from "../../Components/Banner"
import TranslateButton from "../../Components/TranslateButton";
import { useLanguage } from "../../contexts/LanguageContext";

function Tender() {

  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  return (
    <div>
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <div className=" min-h-screen">
        <Banner image="tender.jpg"/>
        {/* tender page body */}
        <div className="p-5">
          {/* tender table */}
          <TenderTable/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Tender;

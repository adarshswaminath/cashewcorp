import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import DirectorCard from "./DirectorCard";
import TranslateButton from "../../Components/TranslateButton";
import { useLanguage } from "../../contexts/LanguageContext";
import enDirectorBoard from "./enDirectorBoard.json"
import mlDirectorBoard from "./mlDirectorBoard.json"
import useLanguageData from "../../Hook/useLanguageData";

function DirectorBoardPage() {
  const {language,setLanguage} = useLanguage()
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  const data = useLanguageData(enDirectorBoard,mlDirectorBoard)
  console.table(data)
  return (
    <div>
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <Banner image="directorboard1.jpg" />
      <h3 className="text-center text-3xl font-semibold text-red-400">
        { language ? "Board Of Directors" : "ഭരണസമിതി അംഗങ്ങൾ"}
      </h3>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center p-5">
        {data.map((data) => (
          <DirectorCard 
          title={data.title}
          caption={data.caption}
          email={data.email}
          phone={data.phone}
          image={data.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DirectorBoardPage;

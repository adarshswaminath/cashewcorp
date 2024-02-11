import React, { useEffect } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Banner from "../../../Components/Banner";
import TranslateButton from "../../../Components/TranslateButton";
import { useLanguage } from "../../../contexts/LanguageContext";
import mlKSCDC from "./mlKSCDC.json";
import enKSCDC from "./enKSCDC.json";
import useLanguageData from "../../../Hook/useLanguageData";

function Kscdc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  const { language, setLanguage } = useLanguage();
  const data = useLanguageData(enKSCDC, mlKSCDC);
  return (
    <div>
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <Navbar />
      <Banner image="about.jpg" />
      {/* Body content */}
      <div className="p-6">
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{data[0].title}</h2>
          <p className="text-gray-700 leading-7 text-justify">
            {data[0].para_one}
          </p>

          <p className="text-gray-700 leading-7 mt-4 text-justify">
            {data[0].para_two}
          </p>

          <p className="text-gray-700 leading-7 mt-4 text-justify">
            {data[0].para_three}
          </p>

          <p className="text-gray-700 leading-7 mt-4 text-justify">
            {data[0].para_four}
          </p>

          <p className="text-gray-700 leading-7 mt-4 text-justify">
            {data[0].para_five}
          </p>
        </section>
        <div data-aos="zoom-in-down">
          <img src="/images/company.jpeg" alt="Company Image" />
        </div>
        <div className="mt-4 flex flex-col items-start justify-center ">
          <h3 className="text-2xl font-bold">{data[1].kollam}</h3>
          <p className="w-full">{data[1].kollam_content}</p>
        </div>
        <div>
          <div className="mt-8 grid lg:flex justify-center items-center gap-8">
            {/* Mission Card */}
            <div data-aos="fade-right" className="w-full ">
              <h2 className="text-3xl font-bold mb-4">{data[2].mission}</h2>
              <p className="text-gray-700 leading-relaxed">
                {data[2].mission_content}
              </p>
            </div>

            {/* Vision Card */}
            <div data-aos="fade-left" className="w-full">
              <h2 className="text-3xl font-bold mb-4">{data[2].vision}</h2>
              <p className="text-gray-700 leading-relaxed">
                {data[2].vision_content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kscdc;

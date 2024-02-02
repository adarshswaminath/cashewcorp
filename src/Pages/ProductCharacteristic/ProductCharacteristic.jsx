import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import CashewGradeTable from "./CashewGradeTable";
import {
  gradeAData,
  gradeBData,
  gradeCData,
  gradeDContData,
  gradeDData,
  gradeEData,
  gradeFData
} from ".";

const ProductCharacteristic = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Banner image={`cashew.jpg`} />
      </div>
      {/* body part */}
      <div className="p-3">
        <h1 className="text-3xl font-bold">General Characteristics:</h1>
        <p className="text-xl max-w-4xl mt-6 mb-6">
          Cashew Kernels shall have been obtained through roasting, shelling and
          peeling cashew nuts. (Anacardium occidentale L.)
        </p>
        <h2 className="font-semibold mt-2 text-xl">SPECIAL CHARACTERISTICS:</h2>
        <CashewGradeTable gradeData={gradeAData} />
        <CashewGradeTable gradeData={gradeBData} />
        <CashewGradeTable gradeData={gradeCData} />
        <CashewGradeTable gradeData={gradeDData} />
        <CashewGradeTable gradeData={gradeDContData} />
        <CashewGradeTable gradeData={gradeEData} />
        <CashewGradeTable gradeData={gradeFData} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductCharacteristic;

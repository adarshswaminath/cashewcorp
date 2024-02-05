import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import TenderTable from "./TenderTable";
import Banner from "../../Components/Banner"

function Tender() {
  return (
    <div>
      <Navbar />
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

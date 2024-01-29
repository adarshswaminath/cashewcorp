import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Banner from "../../../Components/Banner";
import FranchiseeTable from "./FranchiseeTable";

function Franchisee() {
  return (
    <div>
      <Navbar />
      <Banner image="franchisee.jpg"/>
      <div className="p-3" id="franchisee">
        <h3 className="text-center text-4xl font-bold text-red-500">Our Franchisees</h3>
        <FranchiseeTable />
      </div>
      <Footer />
    </div>
  );
}

export default Franchisee;

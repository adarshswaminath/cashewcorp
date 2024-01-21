import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import FranchiseeTable from "./FranchiseeTable";

function Franchisee() {
  return (
    <div>
      <Navbar />
      <div className="p-3">
        <div className="banner">
          <h3 className="text-3xl font-bold text-white">Franchisee</h3>
        </div>
      </div>
      <div className="p-3">
        <FranchiseeTable />
      </div>
      <Footer />
    </div>
  );
}

export default Franchisee;

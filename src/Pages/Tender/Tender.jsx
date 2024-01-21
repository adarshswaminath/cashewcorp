import Navbar from "../../Components/Navbar";
import TenderTable from "./TenderTable";

function Tender() {
  return (
    <div>
      <Navbar />
      <div className="p-3 min-h-screen">
        <div className="banner">
          <h2 className="text-3xl font-bold text-white">LIVE TENDERS</h2>
        </div>
        {/* tender page body */}
        <div className="p-2">
          {/* tender table */}
          <TenderTable/>
        </div>
      </div>
    </div>
  );
}

export default Tender;

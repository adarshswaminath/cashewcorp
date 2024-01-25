import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const tenderData = [
  { name: "Re-Tender for Medical Insurance Policy", link: "#", date: "30/01/2024" },
  {
    name: "Tender no. 19 - “Re-Tender for Cashew Kernels ” - Guinea Bissau Origin Tender Id: 2024_KSCDC_639483_2 (with revised BOQ)",
    link: "#",
    date: "15/02/2024",
  },
  {
    name: "Quotation Notice for Empty Gunnies",
    link: "#",
    date: "01/03/2024",
  },
  {
    name: "Tender no. 19 - “Tender for Cashew Kernels ” - Guinea Bissau Origin - Tender Id: 2024_KSCDC_639483_1",
    link: "#",
    date: "15/03/2024",
  },
  {
    name: "Tender no. 18 - “Tender for Cashew Kernels ” - Guinea Bissau Origin - Tender Id: 2024_KSCDC_639447_1",
    link: "#",
    type: "previous",
    subType: "tenders", // subType for "previous" tenders
    date: "01/04/2024",
  },
  {
    name: "Tender for Indian Grade",
    link: "#",
    type: "live",
    subType: "tenders",
    date: "15/04/2024",
  },
  {
    name: "Re-Tender for Medical Insurance Policy",
    link: "#",
    type: "live",
    subType: "e-tenders",
    date: "01/05/2024",
  },
  {
    name: "Quotation for Cashew Skin",
    link: "#",
    type: "previous",
    subType: "quotations",
    date: "15/05/2024",
  }, // subType for "previous" quotations
  {
    name: "Quotation for Roasted Shell & Cutting Shell",
    link: "#",
    type: "live",
    subType: "tenders",
    date: "01/06/2024",
  },
  {
    name: "Tender no. 17 - “Tender for Cashew Kernels ” - Guinea Bissau Origin Tender Id: 2023_KSCDC_632543_1",
    link: "#",
    type: "previous",
    subType: "tenders", // subType for "previous" tenders
    date: "15/06/2024",
  },
  {
    name: "Tender for Empty Gunny",
    link: "#",
    type: "previous",
    subType: "tenders",
    date: "01/07/2024",
  }, // subType for "previous" tenders
];


const TenderTable = () => {
  const [filter, setFilter] = useState("all"); // Initial filter value
  const [subFilter, setSubFilter] = useState("all"); // Initial sub-filter value for Live Tenders

  const filteredData = tenderData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "live") {
      if (subFilter === "all") return item.type === "live";
      return item.type === "live" && item.subType === subFilter;
    }
    if (filter === "previous") return item.type === "previous";
    return false;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSubFilter("all"); // Reset sub-filter when main filter changes
  };

  const handleSubFilterChange = (newSubFilter) => {
    setSubFilter(newSubFilter);
  };

  return (
    <div>
      {/* btn grp */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          className={`btn  ${
            filter === "all" && "btn-active bg-red-500 text-white"
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`btn ${
            filter === "live" && "btn-active bg-red-500 text-white"
          }`}
          onClick={() => handleFilterChange("live")}
        >
          Live Tenders
        </button>
        <button
          className={`btn ${
            filter === "previous" && "btn-active bg-red-500 text-white"
          }`}
          onClick={() => handleFilterChange("previous")}
        >
          Previous Tenders
        </button>
      </div>
      {/* sub list */}
      <div className="flex items-center justify-center">
        {filter === "live" && (
          <div className="flex items-center space-x-2">
            <button
              className={`btn ${
                subFilter === "all" && "btn-active bg-red-500 text-white"
              }`}
              onClick={() => handleSubFilterChange("all")}
            >
              All
            </button>
            <button
              className={`btn ${
                subFilter === "tenders" && "btn-active bg-red-500 text-white"
              }`}
              onClick={() => handleSubFilterChange("tenders")}
            >
              Tenders
            </button>
            <button
              className={`btn ${
                subFilter === "e-tenders" && "btn-active bg-red-500 text-white"
              }`}
              onClick={() => handleSubFilterChange("e-tenders")}
            >
              E-Tenders
            </button>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black bg-red-400">
              <th></th>
              <th>Tender Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {filteredData.map((value, index) => (
              <tr className={`${index % 2 ===0 ? "bg-red-100" : "bg-red-50"}`} key={index}>
                <th>{index + 1}</th>
                <td className="font-bold">
                  <a href={value.link} target="_blank">
                    {value.name}
                  </a>
                </td>
                <td>
                  {value.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenderTable;

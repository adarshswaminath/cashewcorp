import React,{useState} from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const tenderData = [
  { name: "Re-Tender for Medical Insurance Policy", link: "#" },
  {
    name: "Tender no. 19 - “Re-Tender for Cashew Kernels ” - Guinea Bissau Origin Tender Id: 2024_KSCDC_639483_2 (with revised BOQ)",
    link: "#",
  },
  {
    name: "Quotation Notice for Empty Gunnies",
    link: "#",
  },
  {
    name: "Tender no. 19 - “Tender for Cashew Kernels ” - Guinea Bissau Origin - Tender Id: 2024_KSCDC_639483_1",
    link: "#",
  },
  {
    name: "Tender no. 18 - “Tender for Cashew Kernels ” - Guinea Bissau Origin - Tender Id: 2024_KSCDC_639447_1",
    link: "#",
    type: "previous",
    subType: "tenders", // subType for "previous" tenders
  },
  { name: "Tender for Indian Grade", link: "#", type: "live" },
  { name: "Re-Tender for Medical Insurance Policy", link: "#", type: "live" },
  { name: "Quotation for Cashew Skin", link: "#", type: "previous", subType: "quotations" }, // subType for "previous" quotations
  { name: "Quotation for Roasted Shell & Cutting Shell", link: "#", type: "live" },
  {
    name: "Tender no. 17 - “Tender for Cashew Kernels ” - Guinea Bissau Origin Tender Id: 2023_KSCDC_632543_1",
    link: "#",
    type: "previous",
    subType: "tenders", // subType for "previous" tenders
  },
  { name: "Tender for Empty Gunny", link: "#", type: "previous", subType: "tenders" }, // subType for "previous" tenders
];


function TenderTable() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSubType, setSelectedSubType] = useState("all");

  const filteredTenders = tenderData.filter((tender) => {
    if (selectedType === "all") return true;

    if (selectedType === "tender") {
      return tender.type === "live" || tender.type === "previous";
    }

    if (selectedType === "quotation") {
      return tender.type === "live" || tender.type === "previous";
    }

    if (selectedType === "previous") {
      if (selectedSubType === "all") {
        return tender.type === "previous";
      } else {
        return tender.type === "previous" && tender.subType === selectedSubType;
      }
    }

    return tender.type === selectedType;
  });

  const subFilterOptions = [
    { value: "all", label: "All" },
    { value: "tenders", label: "Previous Tenders" },
    { value: "quotations", label: "Previous Quotations" },
  ];

  return (
    <div>
      <div>
        <label htmlFor="list" className="text-xl">
          Filter Tenders
        </label>
        <div className="flex mt-2 items-center justify-center gap-3">
          <button
            className={`btn ${selectedType === "all" ? "active bg-red-500 text-white" : ""}`}
            onClick={() => {
              setSelectedType("all");
              setSelectedSubType("all");
            }}
          >
            All
          </button>
          <button
            className={`btn ${selectedType === "tender" ? "active bg-red-500 text-white" : ""}`}
            onClick={() => {
              setSelectedType("tender");
              setSelectedSubType("all");
            }}
          >
            Tender
          </button>
          <button
            className={`btn ${selectedType === "quotation" ? "active bg-red-500 text-white" : ""}`}
            onClick={() => {
              setSelectedType("quotation");
              setSelectedSubType("all");
            }}
          >
            Quotation
          </button>
          <button
            className={`btn ${selectedType === "previous" ? "active bg-red-500 text-white" : ""}`}
            onClick={() => setSelectedType("previous")}
          >
            Previous
          </button>
        </div>
        <div className="flex items-center justify-center">
        {selectedType === "previous" && (
            <select
              className="dropdown text-xl border rounded p-2 mt-2 outline-none"
              value={selectedSubType}
              onChange={(e) => setSelectedSubType(e.target.value)}
            >
              {subFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {filteredTenders.map((value, index) => (
              <tr className="bg-base-200" key={index}>
                <th>{index + 1}</th>
                <td className="font-bold">{value.name}</td>
                <td>
                  <a
                    href={value.link}
                    className="p-2 bg-red-500 text-white rounded-full flex items-center gap-2 justify-center"
                  >
                    open
                    <FaExternalLinkAlt />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default TenderTable;

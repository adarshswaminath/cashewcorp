import React,{useState} from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const tenderData = [
  { name: "Re-Tender for Medical Insurance Policy", link: "#" },
  {
    name: "Tender no. 19 - “Re-Tender for Cashew Kernels ” - Guinea Bissau Origin Tender Id: 2024_KSCDC_639483_2 (with revised BOQ)",
    link: "#",
  },
  {
    name:"Quotation Notice for Empty Gunnies",
    link: "#"
  },
  {
    name: "Tender no. 19 - “Tender for Cashew Kernels ” - Guinea Bissau Origin - Tender Id: 2024_KSCDC_639483_1",
    link: "#",
  },
  {
    name: "Tender no. 18 - “Tender for Cashew Kernels ” - Guinea Bissau Origin - Tender Id: 2024_KSCDC_639447_1",
    link: "#",type:"previous"
  },
  { name: "Tender for Indian Grade", link: "#",type:"live" },
  { name: "Re-Tender for Medical Insurance Policy", link: "#",type:"live" },
  { name: "Quotation for Cashew Skin", link: "#",type: "previous"},
  { name: "Quotation for Roasted Shell & Cutting Shell", link: "#" ,type:"live"},
  {
    name: "Tender no. 17 - “Tender for Cashew Kernels ” - Guinea Bissau Origin Tender Id: 2023_KSCDC_632543_1",
    link: "#",type:"previous"
  },
  { name: "Tender for Empty Gunny", link: "#",type:"previous" },
];

function TenderTable() {
    const [selectedType, setSelectedType] = useState("all");
  
    const filteredTenders = tenderData.filter((tender) => {
      if (selectedType === "all") return true;
      return tender.type === selectedType;
    });
  
    return (
      <div>
        <div>
          <label htmlFor="list" className="text-xl">
            Filter Tenders
          </label>
          <select
            className="dropdown text-2xl border rounded p-2 mt-2"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="live">Live</option>
            <option value="previous">Previous</option>
          </select>
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

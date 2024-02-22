import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import useGetApi from "../../Hook/useGetApi";
import Loading from "../../Components/Loading";

const TenderTable = () => {
  const { response } = useGetApi("tenders");

  // Move the hook calls to the top of the component function
  const [filter, setFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("all");

  if (!response) {
    return <Loading />;
  }

  const filteredData = response.filter((item) => {
    if (filter === "all") return true;
    if (filter === "live") {
      if (subFilter === "all") return item.category === "live";
      if (subFilter === "Tenders") return item.category === "live" && !item.is_e_tender;
      if (subFilter === "E-Tenders") return item.category === "live" && item.is_e_tender;
    }
    if (filter === "previous") {
      // Include tenders with expiry dates for "Previous Tenders" filter
      return item.category === "previous" && item.expiry_date;
    }
    return false;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSubFilter("all");
  };

  const handleSubFilterChange = (newSubFilter) => {
    setSubFilter(newSubFilter);
  };

  return (
    <div>
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          className={`btn ${filter === "all" && "btn-active bg-red-500 text-white"}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`btn ${filter === "live" && "btn-active bg-red-500 text-white"}`}
          onClick={() => handleFilterChange("live")}
        >
          Live Tenders
        </button>
        <button
          className={`btn ${filter === "previous" && "btn-active bg-red-500 text-white"}`}
          onClick={() => handleFilterChange("previous")}
        >
          Previous Tenders
        </button>
      </div>
      <div className="flex items-center justify-center">
        {filter === "live" && (
          <div className="flex items-center space-x-2">
            <button
              className={`btn ${subFilter === "all" && "btn-active bg-red-500 text-white"}`}
              onClick={() => handleSubFilterChange("all")}
            >
              All
            </button>
            <button
              className={`btn ${subFilter === "Tenders" && "btn-active bg-red-500 text-white"}`}
              onClick={() => handleSubFilterChange("Tenders")}
            >
              Tenders
            </button>
            <button
              className={`btn ${subFilter === "E-Tenders" && "btn-active bg-red-500 text-white"}`}
              onClick={() => handleSubFilterChange("E-Tenders")}
            >
              E-Tenders
            </button>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-3 m-3">
        <>
          <span className="badge badge-xs bg-green-500"></span>
          <span>Tender</span>
        </>
        <>
          <span className="badge badge-xs bg-red-500"></span>
          <span>E-Tender</span>
        </>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-black bg-red-400">
              <th></th>
              <th>Tender Title</th>
              <th>Date</th>
              {filter === "previous" && <th>Expiry Date</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((value, index) => (
              <tr className={`${index % 2 === 0 ? "bg-red-100" : "bg-red-50"}`} key={index}>
                <th>{index + 1}</th>
                <td className="font-bold flex items-center space-x-5">
                  <a href={value.files[0].file} target="_blank" rel="noopener noreferrer">
                    {value.title}
                  </a>
                  {value.is_e_tender && (
                    <span className="badge badge-xs bg-red-500 p-2">E-Tender</span>
                  )}
                  {!value.is_e_tender && (
                    <span className="badge badge-xs bg-green-500 p-2">Tender</span>
                  )}
                </td>
                <td>{value.published_date}</td>
                {filter === "previous" && <td>{value.expiry_date}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenderTable;

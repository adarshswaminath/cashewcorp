import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
const careerData = [
  {
    title: "ജീവനക്കാരുടെ സ്ഥലം മാറ്റത്തിനുള്ള ഓൺലൈൻ അപേക്ഷ",
    link: "https://www.google.com",
    date: "12/02/24",
    status: true,
  },
  {
    title: "Corrigendum - Post of Marketing Officer dated 05.06.2023",
    link: "https://www.google.com",
    date: "23/01/24",
    status: true,
  },
  {
    title: "Application for the Post of Marketing Officer",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
  {
    title: "Rank List for the Post Of Site Supervisor KSCDC",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
  {
    title: "Rank List for the Post Of Food Technologist KSCDC",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
  {
    title: "Corrigendum - Post of Site Supervisor dated 03.12.2022",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
  {
    title:
      "Application for the Post of Food Technologist",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
  {
    title: "Corrigendum - Post of Food Technologist dated 16.11.2022",
    link: "https://www.google.com",
    date: "15/01/23",
    status: false,
  },
  {
    title: "Corrigendum - Post of Food Technologist dated 07.11.2022",
    link: "https://www.google.com",
    date: "15/01/23",
    status: false,
  },
  {
    title: "Corrigendum - Post of Food Technologist dated 27.10.2022",
    link: "https://www.google.com",
    date: "29/01/23",
    status: false,
  },
  {
    title: "വീട്ടിലേക്ക് വന്ന് ഒരുപാട് വസ്ത്രങ്ങൾ എടുക്കുന്നതിനുള്ള അപേക്ഷ",
    link: "https://www.google.com",
    date: "02/03/24",
    status: true,
  },
  {
    title: "Corrigendum - Post of HR Manager dated 15.04.2023",
    link: "https://www.google.com",
    date: "10/02/24",
    status: true,
  },
  {
    title: "Application for the Post of HR Manager",
    link: "https://www.google.com",
    date: "05/02/24",
    status: true,
  },
  {
    title: "Rank List for the Post Of Project Engineer",
    link: "https://www.google.com",
    date: "05/02/24",
    status: true,
  },
  {
    title: "Rank List for the Post Of Data Analyst",
    link: "https://www.google.com",
    date: "05/02/24",
    status: true,
  },
  {
    title: "Corrigendum - Post of Project Engineer dated 20.01.2023",
    link: "https://www.google.com",
    date: "05/02/24",
    status: true,
  },
  {
    title: "Application for the Post of Data Analyst",
    link: "https://www.google.com",
    date: "05/02/24",
    status: true,
  },
  {
    title: "Corrigendum - Post of Data Analyst dated 10.12.2022",
    link: "https://www.google.com",
    date: "05/02/24",
    status: false,
  },
  {
    title: "Corrigendum - Post of Data Analyst dated 01.12.2022",
    link: "https://www.google.com",
    date: "05/02/24",
    status: false,
  },
  {
    title: "Corrigendum - Post of Data Analyst dated 15.11.2022",
    link: "https://www.google.com",
    date: "05/02/24",
    status: false,
  },
  {
    title: "ജീവനക്കാരുടെ സ്ഥലം മാറ്റത്തിനുള്ള ഓൺലൈൻ അപേക്ഷ",
    link: "https://www.google.com",
    date: "12/02/24",
    status: true,
  },
  {
    title: "Corrigendum - Post of Marketing Officer dated 05.06.2023",
    link: "https://www.google.com",
    date: "23/01/24",
    status: true,
  },
  {
    title: "Application for the Post of Marketing Officer",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
  {
    title: "Rank List for the Post Of Site Supervisor KSCDC",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
  {
    title: "Rank List for the Post Of Food Technologist KSCDC",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
  {
    title: "Corrigendum - Post of Site Supervisor dated 03.12.2022",
    link: "https://www.google.com",
    date: "15/01/24",
    status: true,
  },
];



const itemsPerPage = 10;

function Career() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    const totalItems = careerData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner image="career.jpg" />
      <h2 className="p-3 text-2xl font-bold">Career</h2>
      <span className="flex items-center p-3">
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
        Active &nbsp;
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        Expired
      </span>
      <div className="overflow-x-auto min-h-screen">
        <table className="table">
          {/* head */}
          <thead className="font-bold text-black bg-red-400">
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* rows for the current page */}
            {careerData.slice(startIdx, endIdx).map((value, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-red-100" : "bg-red-50"}`}
              >
                <th>{startIdx + index + 1}</th>
                <td className="font-bold flex items-center gap-2">
                  <a href={value.link} target="_blank" rel="noopener noreferrer">
                    {value.title}
                  </a>{" "}
                  {value.status ? (
                    <span className="bg-green-500 h-3 w-3 rounded-full text-white font-bold"></span>
                  ) : (
                    <span className="bg-red-500 h-3 w-3 rounded-full font-bold"></span>
                  )}
                </td>
                <td>{value.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

         {/* pagination buttons */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? "bg-red-200" : "bg-red-500  text-white"} mr-2 px-3 py-1 rounded`}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage * itemsPerPage >= careerData.length}
          className={`${(currentPage * itemsPerPage >= careerData.length) ? "bg-red-200" : "bg-red-500  text-white"} mr-2 px-3 py-1 rounded`}

        >
          Next
        </button>
      </div>
      </div>

     


      <Footer />
    </div>
  );
}

export default Career;

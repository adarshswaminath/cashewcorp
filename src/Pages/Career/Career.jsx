import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import { FaExternalLinkAlt } from "react-icons/fa";

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
];

function Career() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner image="career.jpg" />
      <h2 className="p-3 text-2xl font-bold">Career</h2>
      <span className="flex items-center p-3">
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
        Active &nbsp;
        <span className="h-3 w-3 rounded-full bg-[#FF1E1E]"></span>
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
            {/* row 1 */}
            {careerData.map((value, index) => (
              <tr key={index} className={`${index % 2 ===0 ? "bg-red-100" : "bg-red-50"}`}>
                <th>{index + 1}</th>
                <a href={value.link} target="_blank">
                <td className="font-bold flex items-center gap-2">
                  {value.title}{" "}
                  {value.status ? (
                    <span className="bg-green-500 h-3 w-3 rounded-full text-white font-bold"></span>
                  ) : (
                    <span className="bg-[#FF1E1E] h-3 w-3 rounded-full font-bold"></span>
                  )}
                </td>
                </a>
                <td>
                  {value.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default Career;

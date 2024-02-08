import { FaDownload } from "react-icons/fa";

const Data = [
  {
    title: "ജീവനക്കാരുടെ സ്ഥലം മാറ്റത്തിനുള്ള ഓൺലൈൻ അപേക്ഷ",
    link: "https://www.google.com",
  },
  {
    title: "Corrigendum - Post of Marketing Officer dated 05.06.2023",
    link: "https://www.google.com",
  },
  {
    title: "Application for the Post of Marketing Officer",
    link: "https://www.google.com",
  },
  {
    title: "Rank List for the Post Of Site Supervisor KSCDC",
    link: "https://www.google.com",
  },
  {
    title: "Rank List for the Post Of Food Technologist KSCDC",
    link: "https://www.google.com",
  },
  {
    title: "Corrigendum - Post of Site Supervisor dated 03.12.2022",
    link: "https://www.google.com",
  },
  {
    title: "Application for the Post of Food Technologist",
    link: "https://www.google.com",
  },
  {
    title: "Corrigendum - Post of Food Technologist dated 16.11.2022",
    link: "https://www.google.com",
  },
  {
    title: "Corrigendum - Post of Food Technologist dated 07.11.2022",
    link: "https://www.google.com",
  },
  {
    title: "Corrigendum - Post of Food Technologist dated 27.10.2022",
    link: "https://www.google.com",
  },
];

function DownloadMedia() {
  return (
    <div>
      <div className="overflow-x-auto p-2">
        <table className="table">
          {/* head */}
          <thead className="bg-red-500 font-bold text-white">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Data.map((value,index) => (
                <tr key={index} className= {`${index %2 === 0 ? 'bg-red-300' : 'bg-red-200'}`}>
                <th>{index+1}</th>
                <td>{value.title}</td>
                <td>
                    <a href={value.link} target="_blank">
                        <FaDownload/>
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

export default DownloadMedia;

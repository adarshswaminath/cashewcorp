import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner"
import { FaExternalLinkAlt } from "react-icons/fa";


const careerData = [
  {title:"ജീവനക്കാരുടെ സ്ഥലം മാറ്റത്തിനുള്ള ഓൺലൈൻ അപേക്ഷ",link: "#",status: true},
  {title:"Corrigendum - Post of Marketing Officer dated 05.06.2023",link: "#",status: true},
  {title:"Application for the Post of Marketing Officer",link: "#",status: true},
  {title:"Rank List for the Post Of Site Supervisor KSCDC",link: "#",status: true},
  {title:"Rank List for the Post Of Food Technologist KSCDC",link: "#",status: true},
  {title:"Corrigendum - Post of Site Supervisor dated 03.12.2022",link: "#",status: true},
  {title:"Application for the Post of Food Technologist/Site Supervisor On Fixed Term Contract Basis",link: "#",status: true},
  {title:"Corrigendum - Post of Food Technologist dated 16.11.2022",link: "#",status: false},
  {title:"Corrigendum - Post of Food Technologist dated 07.11.2022",link: "#",status: false},
  {title: "Corrigendum - Post of Food Technologist dated 27.10.2022",link:"#",status: false}

]

function Career() {
  return (
    <div className="min-h-screen">
      <Navbar />
     <Banner image="career.jpg"/>
     <h2 className="p-3 text-2xl font-bold">Career</h2>
      <div className="overflow-x-auto min-h-screen">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job</th>
        <th>Detils</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {careerData.map((value,index) => (
        <tr key={index} className="bg-base-200">
        <th>{index+1}</th>
        <td className="font-bold flex items-center gap-2">{value.title} {value.status ? <span className="bg-green-500 text-white font-bold">Active</span> : <span className="bg-red-500 text-white font-bold">Expired</span> }</td>
        <td>
          <a href={value.link} className="p-2 rounded-full bg-red-500 text-white flex items-center gap-2 justify-center">
            Details
            <FaExternalLinkAlt/>
          </a>
        </td>
      </tr>
      ))}
     
    </tbody>
  </table>
</div>

      <Footer/>
    </div>
  );
}

export default Career;

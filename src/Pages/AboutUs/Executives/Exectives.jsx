import Navbar from "../../../Components/Navbar"
import Footer from "../../../Components/Footer"
import ExecutiveCard from "./ExecutiveCard"

const seniorExecutives = [
  {
    id: 1,
    name: "Shri. K. Sunil John",
    image: "/images/executives/sr-1.jpg",
    designation: "Materials Manager",
    contact: ["8281114645(O)","0474-2742271(Exn-35)(O)","9495992008(M)","mm@cashewcorporation.com"]
  },
  {
    id: 2,
    name: "Shri. V. Shaji",
    image: "/images/executives/sr-2.jpg",
    designation: "Commercial Manager",
    contact: ["0474-2742271(Exn-47)(O)","9847511950(M)","cm@cashewcorporation.com"]
  },
  {
    id: 3,
    name: "Shri. S. Ajith",
    image: "/images/executives/sr-3.jpg",
    designation: "Personnel Manager",
    contact: ["8281114648 (O)","0474-2742271(Exn-48)(O)","9400449587(M)","pm@cashewcorporation.com"]
  },
  {
    id: 4,
    name: "Shri. Raja Sankara Pillai",
    image: "/images/executives/sr-4.jpg",
    designation: "Finance Manager & Company Secretary",
    contact: ["8281114649(O)","0474-2742271(Exn-49)(O)","9840383950(M)" ,"fm@cashewcorporation.com"]
  },
  {
    id: 5,
    name: "Shri.A.Gopakumar",
    image: "/images/executives/sr-5.png",
    designation: "Production Manager",
    contact: ["8281114637 (O)" ,"0474-2742271(Exn-46)(O)", "9947783524(M)","prm@cashewcorporation.com"]
  },
]
const juniorExecutives = [
  {
    id: 1,
    name: "Shri.Muneer Ahammed.A",
    image: "/images/executives/jr-1.jpg",
    designation: "Asst Manager(Systems)",
    contact: ["8281114641 (O)", "0474-2761410(O)", "0474-2742271(Exn-40)(O)", "9745226500(M)","computercell@cashewcorporation.com"]
  },
  {
    id: 2,
    name: "Smt.P.S.Jayanthi",
    image: "/images/executives/jr-2.jpg",
    designation: "Asst.Commercial Manager",
    contact: ["8281114639(O)", "0474-2742271(Exn-28)(O)", "9349453555(M)","cs1@cashewcorporation.com"]
  },
  {
    id: 3,
    name: "Smt. Yesoda",
    image: "/images/executives/jr-3.jpg",
    designation: "Asst.Manager",
    contact: ["0474-2742271(Exn-36)(O)", "9847112984(M)","8281114642","ps@cashewcorporation.com"]
  },
  {
    id: 4,
    name: "Shri.R.Rajeev",
    image: "/images/executives/jr-4.jpg",
    designation: "Asst Manager",
    contact: []
  },
  {
    id: 5,
    name: "Smt.Bindhu S",
    image: "/images/executives/jr-5.jpg",
    designation: "Asst Manager(Finance) ",
    contact: ["0474-2742271(Exn-26)(O)","9400427533(M)"]
  }
]
function Exectives() {
  return (
    <div>
      <Navbar/>
      <div className="p-3">
        <div className="banner">
          <h3 className="text-3xl font-bold text-white">Executives</h3>
        </div>
      </div>
      {/* senior executives */}
      <div className="p-2 ">
      <h2 className="text-2xl font-bold text-center">Senior Executives</h2>
      <div className="grid place-items-center  gap-3 grid-cols-2 lg:grid-cols-4">
      {seniorExecutives.map((value) => (
        <ExecutiveCard key={value.id} {...value}/>
      ))}
      </div>
      </div>
      {/* junior executives */}
      <div className="p-2 ">
      <h2 className="text-2xl font-bold text-center">Junior Executives</h2>
      <div className="grid place-items-center gap-3 grid-cols-2 lg:grid-cols-3">
      {juniorExecutives.map((value) => (
        <ExecutiveCard key={value.id} {...value}/>
      ))}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Exectives
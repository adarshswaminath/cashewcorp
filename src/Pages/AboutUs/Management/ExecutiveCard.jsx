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
    image: "/images/executives/sr-4.png",
    designation: "Finance Manager & Company Secretary",
    contact: ["8281114649(O)","0474-2742271(Exn-49)(O)","9840383950(M)" ,"fm@cashewcorporation.com"]
  },
  {
    id: 5,
    name: "Shri.A.Gopakumar",
    image: "/images/executives/sr-5.jpg",
    designation: "Production Manager",
    contact: ["8281114637 (O)" ,"0474-2742271(Exn-46)(O)", "9947783524(M)","prm@cashewcorporation.com"]
  },
]


function ExecutiveCard({ name, image, designation, contact }) {
  return (
    <div data-aos="fade-up" className="w-80 rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w h-60" src={image} alt={name} />
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{designation}</p>
      </div>
      <div className="px-6 py-4">
        <ul>
          {contact.map((value, index) => (
            <li key={index} className="mb-2">
              {value}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default ExecutiveCard;

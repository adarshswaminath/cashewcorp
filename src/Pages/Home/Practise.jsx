import { Link } from "react-router-dom";
let blogDetils = [
    {id:1,image: "/images/blog/blog-1.png",title: "Kollam ‘The Cashew Capital’",caption: "Situated in the southern coast of India.This ancient port town has hundred years of heritage to its credit."},
    {id:2,image: "/images/blog/blog-2.png",title: "Kerala Budget 2024",caption:"Kerala government has allocated 53.36 crore rupees for the cashew sector in the Kerala budget presented 2024"},
    {id:3,image: "/images/blog/blog-3.png",title: "KSCDC Launched 24 premium products",caption: "In order to activate value added products in the domastic and international market KSCDC launched "},

]
import { enHomeBlog } from "./Language/en";
import { mlHomeBlog } from "./Language/ml";
import useLanguageData from "../../Hook/useLanguageData";
import { useLanguage } from "../../contexts/LanguageContext";


function Practise() {
  const data = useLanguageData(enHomeBlog,mlHomeBlog)
  const aosEffect = ["zoom-in","fade-up","zoom-in"]
  return (
    <div className="p-3">
      <h3 data-aos="fade-right" className="text-2xl font-bold m-4 text-center text-red-500">
        {data[0].title}
      </h3>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center">
      {blogDetils.map((value,index) => (
        <PractiseCard 
        index={index}
        key={value.image} 
        aosanimation={aosEffect[index]}
        image={value.image}
        title={value.title}
        caption={value.caption}
        link={value.link}
        />
      ))}
      </div>
    </div>
  );
}

const PractiseCard = ({ image,index, title, caption,aosanimation,link }) => {
  const {language} = useLanguage()  
  return (
      <div data-aos={aosanimation} data-aos-duration="500" className="w-80 overflow-hidden  flex flex-col items-start">
        <figure className="p-4">
          <img
            src={image}
            alt={title}
            className="object-cover w-80 h-64 rounded-md"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 ">{caption}</p>
          <Link to="/read-blog">
          <button className="mt-4 px-5 py-1 border border-black">
          {language ? "Read More" : "കൂടുതൽ വായിക്കുക"}
          </button>
          </Link>
        </div>
      </div>
    );
  };
  



export default Practise;

import { Link } from "react-router-dom";
let blogDetils = [
    {id:1,image: "/images/blog/blog-1.png",title: "Kollam ‘The Cashew Capital’",caption: "Situated in the southern coast of India.This ancient port town has hundred years of heritage to its credit."},
    {id:2,image: "/images/blog/blog-2.png",title: "Kerala Budget 2024",caption:"Kerala government has allocated 53.36 crore rupees for the cashew sector in the Kerala budget presented 2024"},
    {id:3,image: "/images/blog/blog-3.png",title: "KSCDC Launched 24 premium products",caption: "In order to activate value added products in the domastic and international market KSCDC launched "},

]

let malayalamBlog = [
  {id:1,image: "/images/blog/blog-1.png",title: "കൊല്ലം 'കശുവണ്ടിയുടെ തലസ്ഥാനം'",caption: "ഇന്ത്യയുടെ തെക്കൻ തീരത്താണ് സ്ഥിതി ചെയ്യുന്നത്. ഈ പുരാതന തുറമുഖ നഗരത്തിന് നൂറു വർഷത്തെ പാരമ്പര്യമുണ്ട്."},
  {id:2,image: "/images/blog/blog-2.png",title: "കേരള ബജറ്റ് 2024",caption:"2024-ലെ കേരള ബജറ്റിൽ കശുവണ്ടി മേഖലയ്ക്ക് 53.36 കോടി രൂപ അനുവദിച്ചു.ഈ അനുമതി കേരള സർക്കാർ കശുവണ്ടി ഉത്പാദനം സംവിധാനിച്ചുകൊണ്ട് ബജറ്റിൽ കൂടുതൽ പ്രാധാന്യം നൽകുന്നു"},
  {id:3,image: "/images/blog/blog-3.png",title: "KSCDC 24 പ്രീമിയം ഉൽപ്പന്നങ്ങൾ പുറത്തിറക്കി",caption: "ആഭ്യന്തര, അന്തർദേശീയ വിപണിയിൽ മൂല്യവർധിത ഉൽപ്പന്നങ്ങൾ സജീവമാക്കുന്നതിനായി കെഎസ്‌സിഡിസി ആരംഭിച്ചു"},

]
import { enHomeBlog } from "./Language/en";
import { mlHomeBlog } from "./Language/ml";
import useLanguageData from "../../Hook/useLanguageData";
import { useLanguage } from "../../contexts/LanguageContext";

function Practise() {
  const {language} = useLanguage()
  // malaylam of english choosing with the useLanguageData hook
  let blogContent = language ? blogDetils : malayalamBlog
  const data = useLanguageData(enHomeBlog,mlHomeBlog)
  const aosEffect = ["zoom-in","fade-up","zoom-in"]
  return (
    <div className="p-3">
      <h3 data-aos="fade-right" className="text-2xl font-bold m-4 text-center text-red-500">
        {data[0].title}
      </h3>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center">
      {blogContent.map((value,index) => (
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
          <h2 className=" font-bold mb-2">{title}</h2>
          <p className={`text-gray-600 `}>{caption}</p>
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

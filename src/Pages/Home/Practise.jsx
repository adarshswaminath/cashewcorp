import { Link } from "react-router-dom";
let cardDetils = [
    {image: "https://picsum.photos/id/10/300/300",title: "A single source of truth",caption: "ReprehendeRTI irure ea nisi nostrud aliqua excepteur officia aute."},
    {image: "https://picsum.photos/id/12/300/300",title: "Fastest way to organize",caption:"Dolore proident reprehendeRTI ullamco aute qui sit."},
    {image: "https://picsum.photos/id/13/300/300",title: "Fastest way to take action",caption: "Voluptate et minim mollit Lorem nisi anim ea ut tempor adipisicing pariatur amet."},

]

const PractiseCard = ({ image, title, caption,aosanimation }) => {
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
          <p className="text-gray-600">{caption}</p>
          <Link to="/blog">
          <button className="mt-4 px-5 py-1 border border-black">Read More</button>
          </Link>
        </div>
      </div>
    );
  };
  

function Practise() {
  const aosEffect = ["zoom-in","fade-up","zoom-in"]
  return (
    <div className="p-3">
      <h3 data-aos="fade-right" className="text-3xl font-bold m-4 text-center text-red-500">
        Blog & News Update
      </h3>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center">
      {cardDetils.map((value,index) => (
        <PractiseCard 
        key={value.image} 
        aosanimation={aosEffect[index]}
        image={value.image}
        title={value.title}
        caption={value.caption}
        />
      ))}
      </div>
    </div>
  );
}

export default Practise;

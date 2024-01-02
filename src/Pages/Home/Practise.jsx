
let cardDetils = [
    {image: "https://picsum.photos/id/10/300/300",title: "A single source of truth",caption: "Reprehenderit irure ea nisi nostrud aliqua excepteur officia aute."},
    {image: "https://picsum.photos/id/12/300/300",title: "Fastest way to organize",caption:"Dolore proident reprehenderit ullamco aute qui sit."},
    {image: "https://picsum.photos/id/13/300/300",title: "Fastest way to take action",caption: "Voluptate et minim mollit Lorem nisi anim ea ut tempor adipisicing pariatur amet."},
    {image: "https://picsum.photos/id/14/300/300",title: "Work better together",caption: "Est nisi cupidatat eu pariatur tempor nulla consectetur elit."},

]

const PractiseCard = ({ image, title, caption }) => {
    return (
      <div className="bg-white r overflow-hidden  mx-auto">
        <figure className="p-4">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-32 rounded-md"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{caption}</p>
        </div>
      </div>
    );
  };
  

function Practise() {
  return (
    <div className="p-3">
      <h3 className="text-4xl font-bold uppercase m-4 text-center">
        Practise Advice
      </h3>
      <p className="text-center max-w-3xl mx-auto text-gray-500 font-bold">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics Newtonian mechanics
      </p>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 place-items-center justify-items-center">
      {cardDetils.map((value) => (
        <PractiseCard 
        key={value.image} 
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

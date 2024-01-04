const images = [
    'https://i.pravatar.cc/150?img=8',
    'https://i.pravatar.cc/150?img=11',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=13',
]


function Avatar({img}) {
  return (
    <div className=" flex flex-col items-center avatar">
      <div className="w-28 rounded">
        <img src={img} />
      </div>
      <div className="text-center">
        <p className="font-bold">Name</p>
        <p className="text-xs">Chairman</p>
      </div>
    </div>
  );
}

function Leaders() {
  return (
    <div className="p-3">
      <h3 className="text-4xl font-bold uppercase m-4 text-center">
        our leaders
      </h3>
      <p className="text-center max-w-3xl mx-auto text-gray-500 font-bold">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics Newtonian mechanics
      </p>
      <div className="grid grid-cols-4 lg:grid-cols-5 mt-2">
        {images.map((value,index) => (
            <Avatar key={index} img={images[index]}/>
        ))}
      </div>
    </div>
  );
}

export default Leaders;

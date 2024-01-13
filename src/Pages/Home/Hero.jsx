import Navbar from "../../Components/Navbar";

const FirstColn = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center ">
        <img src="/images/CDC.png" alt="CDC" className="h-28 lg:h-36" />
        <img src="/images/gov.png" alt="CDC" className="h-28 lg:h-36" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 border-2 border-black">
        <img
          src="/images/profile-1.jpeg"
          className="h-44 w-full object-cover rounded-md"
          alt="Profile-1"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfNmHk9tv0q_BwgLggktnh6wDSCyv0_SFt_XdYGBooKN1BBO1aGy0w8G_RbDcUAi-tDM"
          className="h-44 w-full object-cover rounded-md"
          alt="Profile-2"
        />
        <img
          src="https://th-i.thgim.com/public/news/national/kerala/ljhxbh/article37900682.ece/alternates/LANDSCAPE_1200/S-Jayamohan"
          className="h-44 w-full object-cover rounded-md"
          alt="Profile-3"
        />
        <img
          src="https://cashewcorporation.com/wp-content/uploads/2016/09/MM-233x300.jpg"
          className="h-44 w-full object-cover rounded-md"
          alt="Profile-4"
        />
      </div>
    </div>
  );
};
const SecondColn = () => {
  return (
    <div className="flex flex-col items-start p-6 mx-2 my-4 bg-white rounded-lg md:p-8">
      <h1 className="text-balance text-5xl font-semibold mb-4">Cashews KCDC</h1>
      <p className="text-balance max-w-lg mb-6">
        Lorem consequat voluptate non veniam sint velit do qui. Nisi do nisi in
        excepteur ipsum est est velit irure esse voluptate. Qui cillum dolore
        occaecat est exercitation id pariatur tempor anim tempor cupidatat ad.
        Sit reprehenderit laboris nostrud adipisicing veniam consectetur eu aute
        quis excepteur aute. Veniam id exercitation do eu ut adipisicing culpa
        consequat nisi.
      </p>
      <button className="px-5 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
        Get Started
      </button>
      {/* product list */}
      <div className="flex space-x-4 items-center mt-4">
        <img
          src="/images/products/product-3.png"
          className="object-contain bg-blue-300 w-14 h-14 rounded-full border border-black hover:scale-150 transition ease-in-out duration-300 delay-150"
          alt="Cashew-soda.jpg"
        />
        <img
          src="/images/products/product-3.png"
          className="object-contain bg-orange-300 h-14 w-14 rounded-full border border-black hover:scale-150 transition ease-in-out duration-300 delay-150"
          alt="Cashew-soda.jpg"
        />
        <img
          src="/images/products/product-3.png"
          className="object-contain bg-rose-300 h-14 w-14 rounded-full border border-black hover:scale-150 transition ease-in-out duration-300 delay-150"
          alt="Cashew-soda.jpg"
        />
      </div>
    </div>
  );
};

const ThirdColn = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2 gap-2 lg:gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`bg-orange-100 p-2 flex items-center justify-center rounded-lg border border-black ${
            index === 1 || index === 3 ? "lg:mt-3" : null
          }`}
        >
          <img
            src={`/images/products/product-${index + 1}.png`}
            className="h-56 w-52 object-cover"
            alt={`Image-${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

function Hero() {
  return (
    <div>
      <Navbar />
      <div className="p-3 lg:flex items-center justify-center">
        <FirstColn />
        <SecondColn />
        <ThirdColn />
      </div>
    </div>
  );
}

export default Hero;

import "./style/home.css";

function About() {
  return (
    <div className="grid gap-4 lg:flex items-center justify-around   m-6 about">
      <div className="flex flex-col items-start">
        <span className="text-sm text-blue-500 mb-6">Our Experience</span>
        <h2 className="text-4xl max-w-md text-balance">
          We Have Completed <span className="text-orange-500">150+ Projects</span> Succesfully
        </h2>
        <p className="text-balance max-w-xl text-gray-400 mt-6 mb-6">
          Nulla pariatur consectetur proident elit quis et. Nulla aliqua amet
          esse fugiat incididunt. Ex irure ea labore consectetur commodo Lorem.
          Nisi aute laboris quis voluptate do nisi consectetur eu enim. Anim
          sunt sint pariatur ipsum est.
        </p>
        <p className="text-balance max-w-xl text-gray-400 mb-6">Elit minim exercitation elit aliquip
          pariatur labore veniam labore aliquip.Anim magna cillum aliquip
          cillum. Consequat laborum sit officia eiusmod ut ut elit est. Magna
          cillum sunt in commodo. Proident et irure officia do minim cillum sit
          minim id magna nostrud.</p>
        <button className="mt-4 px-5 py-2 bg-orange-500 font-bold text-white uppercase">
          more about us
        </button>
      </div>
      <div className="grid gap-4 grid-cols-2">
        <div className="h-48 w-56 bg-white shadow-lg"></div>
        <div className="lg:mt-4 h-48 w-56 bg-white shadow-lg"></div>
        <div className="h-48 w-56 bg-white shadow-lg"></div>
        <div className="lg:mt-4 h-48 w-56 bg-white shadow-lg"></div>

      </div>
    </div>
  );
}

export default About;

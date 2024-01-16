import "./style/home.css";

function About() {
  return (
    <div className="">
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
        <div className="h-40 w-full aspect-square bg-white shadow-lg"></div>
        <div className="h-40 w-full aspect-square lg:mt-4 bg-white shadow-lg"></div>
        <div className="h-40 w-full aspect-square bg-white shadow-lg"></div>
        <div className="h-40 w-full aspect-square lg:mt-4 bg-white shadow-lg"></div>
      </div>
    </div>
    {/* section */}
    <div className="p-3">
      <div className="grid lg:flex gap-3 items-center justify-evenly">
        {/* Vission Card 1 */}
        <div className="p-4 bg-white w-full lg:max-w-sm flex flex-col items-start mb-6 lg:mb-0 lg:mr-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mt-6">Vission</h2>
          <p className="text-balance mt-6 text-gray-600">
            Commodo consequat voluptate labore mollit exercitation pariatur
            irure excepteur. Dolor officia minim culpa veniam mollit proident
            culpa pariatur velit cupidatat. Quis ut officia tempor id ea ex
            laboris mollit
          </p>
        </div>

        {/* Company Image */}
        <img
          src="/images/company.jpeg"
          alt="Company Image"
          className="object-cover h-96 rounded-lg  mb-6"
        />

        {/* Mission Card 2 */}
        <div className="p-4 bg-white w-full lg:max-w-sm flex flex-col items-start rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mt-6">Mission</h2>
          <p className="text-balance mt-6 text-gray-600">
            Commodo consequat voluptate labore mollit exercitation pariatur
            irure excepteur. Dolor officia minim culpa veniam mollit proident
            culpa pariatur velit cupidatat. Quis ut officia tempor id ea ex
            laboris mollit.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;

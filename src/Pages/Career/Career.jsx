import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function CareerCard() {
  return (
    <div className="p-6 shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-indigo-800">Job Title</h2>
      <div className="flex flex-col items-start space-y-2 mt-3">
      <p>
        <span className="font-bold">Dated:</span> 21/12/2023
      </p>
      <p>
        <span className="font-bold">Roles:</span> Digital Marketing Expert
      </p>
      <p>
        <span className="font-bold">Location:</span> Trivandrum
      </p>
      </div>
    </div>
  );
}
function Career() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-3">
        {/* career hero section */}
        <div
          className="object-cover rounded-xl bg-cover h-96 bg-no-repeat w-full flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')",
          }}
        >
          <h2 className="text-5xl text-white font-bold mt-24">Join The Team</h2>
        </div>
      </div>
      {/* section -1  */}
      <div className="mt-6">
        <div>
          <h3 className="text-center text-3xl font-bold tracking-wider">
            Hiring Calls
          </h3>
          <p className="text-center text-balance text-gray-500">
            Magna in velit sint pariatur pariatur ullamco sint est commodo ex.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
          {Array.from({length:8}).map((_) => (
            <CareerCard />
          ))}
        </div>
      </div>
      {/* sections  -2 */}
      <div className="mt-6">
        <div>
          <h3 className="text-center text-3xl font-bold tracking-wider">
            Previous Hiring Calls
          </h3>
          <p className="text-center text-balance text-gray-500">
            Magna in velit sint pariatur pariatur ullamco sint est commodo ex.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
          {Array.from({length:8}).map((_) => (
            <CareerCard />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Career;

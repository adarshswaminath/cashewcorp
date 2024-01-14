import Navbar from "../../Components/Navbar"

function Tender() {
  return (
    <div>
        <Navbar/>
        <div className="p-3 min-h-screen flex flex-col items-center justify-center">
        <section className="my-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Tenders</h1>
          <p className="text-gray-700 mb-6">
            Explore our diverse range of products designed to meet your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bulk Products Section */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-bold mb-4">Tenders</h2>
              <p>
                Our bulk products are sourced from high-quality suppliers,
                ensuring reliability and affordability.
              </p>
            </div>

            {/* Value Added Products Section */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-bold mb-4">Quotation</h2>
              <p>
                Experience innovation with our value-added products that bring
                extra convenience to your life.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-bold mb-4">Previous Tenders</h2>
              <p>
                Experience innovation with our value-added products that bring
                extra convenience to your life.
              </p>
            </div>
            {/*  */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-bold mb-4">Previous Quotation</h2>
              <p>
                Experience innovation with our value-added products that bring
                extra convenience to your life.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Tender
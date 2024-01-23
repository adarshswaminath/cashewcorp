import React from 'react';
import DirectorBoard from '../../Home/DirectorBoard';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import Banner from "../../../Components/Banner"

function Kscdc() {
  return (
    <div>
      <Navbar />
      <Banner image="about.jpg"/>
      {/* Body content */}
      <div className="container mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">ABOUT KSCDC</h2>
          <p className="text-gray-700 leading-7">
            The Kerala State Cashew Development Corporation Limited (KSCDC) was
            incorporated in July 1969 and started commercial activities in the
            year 1971 as a company fully owned by the Government of Kerala.
            From the modest beginning in 1969, the Corporation has now grown
            into a large organization playing a pivotal role in the cashew
            industry.
          </p>

          <p className="text-gray-700 leading-7 mt-4">
            KSCDC, an ISO 22000-2005 company, is running 30 cashew factories
            across Kerala State with an annual production capacity of 30,000
            Metric Tonnes. More than 15,000 workers and 500 staff members are
            working in these factories. KSCDC now has a turnover of Rs. 250
            crores.
          </p>

          <p className="text-gray-700 leading-7 mt-4">
            KSCDC acts as a model employer in the field of the cashew industry
            mainly to protect the interest of its workers and to provide
            maximum employment to them, ensuring their statutory benefits like
            minimum wages, bonus, etc., prevailing in the cashew industry.
          </p>

          <p className="text-gray-700 leading-7 mt-4">
            With an objective to promote Cashew-based Value Added Products,
            KSCDC has over these years developed a variety of Value Added
            Products from Cashew Apple and Cashew Kernels. These products are
            being widely appreciated in the domestic market and in the
            international market.
          </p>

          <p className="text-gray-700 leading-7 mt-4">
            KSDC also aims at backward integration of its product line and has
            promoted Cashew Plantations in association with the Kerala State
            Agency for Cashew Cultivation and has cultivated Cashew Plantation
            across 25 hectares in its facilities.
          </p>
        </section>
        <div>
                <div className="grid lg:flex justify-center items-center gap-8">
                  {/* Mission Card */}
                  <div
                    data-aos="fade-right"
                    className="p-6 bg-white w-full lg:max-w-md flex flex-col items-start rounded-lg shadow-md border-l-4 border-red-500 transform transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-3"
                  >
                    <h2 className="text-3xl font-bold mb-4">Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                      KSDC aims at backward integration of its product line and
                      has promoted Cashew Plantations in association with the
                      Kerala State Agency for Cashew Cultivation. We have
                      cultivated Cashew Plantation across 25 hectares in our
                      facilities.
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div
                    data-aos="fade-left"
                    className="p-6 bg-white w-full lg:max-w-md flex flex-col items-start rounded-lg shadow-md border-l-4 border-red-500 transform transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-3"
                  >
                    <h2 className="text-3xl font-bold mb-4">Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                      The Vision of KSCDC is to be a World Class Organisation
                      and a Leader in the Cashew Industry by providing 300 days
                      of employment per year and achieve an Annual turnover of
                      Rs. 1000 Crore by the year 2025.
                    </p>
                  </div>
                </div>
              </div>
        <DirectorBoard />
      </div>
      <Footer />
    </div>
  );
}

export default Kscdc;

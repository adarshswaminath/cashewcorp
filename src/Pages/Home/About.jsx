import "./style/home.css";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ScrollAnimation animateIn="fadeIn" delay={300}>
      <div className="">
        <div className="grid gap-4 lg:flex items-center justify-around   m-6 about">
          <div className="flex flex-col items-start">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={100}
            >
              <span className="text-2xl text-blue-500 mb-6 border-l-2 px-2 font-bold border-blue-500">
                Welcome to KCDC
              </span>
            </ScrollAnimation>
            <h2 className="text-xl max-w-md text-balance">About Us </h2>
            <p className="text-balance max-w-xl text-gray-400 mt-6 mb-6">
              The Kerala State Cashew Development Corporation Limited (KSCDC)
              was incorporated in July 1969 and started Commercial activities in
              the year 1971 as a company fully owned by the Government of
              Kerala. From the modest beginning in 1969 Corporation has now
              grown into a large organization playing a pivotal role in Cashew
              industry.
            </p>
            <p className="text-balance max-w-xl text-gray-400 mb-6">
              Elit minim exercitation elit aliquip KSCDC, an ISO 22000-2005
              company, is running 30 cashew factories across Kerala State with
              an annual production capacity of 30,000 Metric Tonnes. More than
              15000 workers and 500 staff members are working in these
              factories. KSCDC now have a turnover of Rs. 250 crore.
            </p>
            <p className="text-balance max-w-xl text-gray-400 mb-6">
              KSCDC acts as a model employer in the field of cashew industry
              mainly to protect the interest of its workers and to provide
              maximum employment to them ensuring their statutory benefits like
              minimum wages, bonus and etc. prevailing in the cashew industry.
            </p>
            <button className="mt-4 px-5 py-2 bg-orange-500 font-bold text-white uppercase ">
              more about us
            </button>
          </div>
          <ScrollAnimation animateIn="fadeIn" delay={340}>
          <div className="grid gap-4 grid-cols-2">
            <div className="h-40 w-full aspect-square bg-white shadow-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-orange-500 text-center">
                News Updates
              </h3>
            </div>
            <div className="h-40 w-full aspect-square lg:mt-4 bg-white shadow-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-orange-500">Tender</h3>
            </div>
            <div className="h-40 w-full aspect-square bg-white shadow-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-orange-500  text-center">
                News Updates
              </h3>
            </div>
            <div className="h-40 w-full aspect-square lg:mt-4 bg-white shadow-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-orange-500">Tender</h3>
            </div>
          </div>
          </ScrollAnimation>
        </div>
        {/* section */}
        <ScrollAnimation animateIn="fadeIn" delay={350}>
          <div className="p-3">
            <div className="grid gap-3">
              {/* Company Image */}
              <img
                src="/images/company.jpeg"
                alt="Company Image"
                className="object-cover w-full h-96 rounded-lg  mb-6"
              />

              <ScrollAnimation animateIn="fadeIn" delay={400}>
                <div className="grid lg:flex justify-center items-center gap-8">
                  {/* Mission Card */}
                  <div className="p-6 bg-white w-full lg:max-w-md flex flex-col items-start rounded-lg shadow-md border-l-4 border-orange-500 transform transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-3">
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
                  <div className="p-6 bg-white w-full lg:max-w-md flex flex-col items-start rounded-lg shadow-md border-l-4 border-orange-500 transform transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-3">
                    <h2 className="text-3xl font-bold mb-4">Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                      The Vision of KSCDC is to be a World Class Organisation
                      and a Leader in the Cashew Industry by providing 300 days
                      of employment per year and achieve an Annual turnover of
                      Rs. 1000 Crore by the year 2025.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  );
}

export default About;

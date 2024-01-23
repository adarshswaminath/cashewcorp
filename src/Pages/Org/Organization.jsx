import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { emailIdSection, factoriesData } from '.';
import Banner from '../../Components/Banner';

function Organization() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter factories based on location
  const filteredFactories = factoriesData.filter((factory) =>
    factory.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Banner image="organization.jpg"/>
      {/* body  */}
      <div className="p-5 text-xl">
        <div className="mb-8">
        <div className="grid lg:grid-cols-2 gap-8 w-full">
  <div className="mb-4 lg:mb-0">
    <h3 className="text-3xl font-bold mb-2">Organization</h3>
    <p className="text-gray-700">
      KSCDC has 30 factories across the state in the districts of Thiruvananthapuram, Kollam, Alleppey, Thrissur, and Kannur of Kerala. It has two Value Added Units (VAU) manufacturing various value-added Products. At the Head office, the company operates under five major departments viz;
    </p>
  </div>
  <div>
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <li className="p-3 bg-white rounded-md shadow-md">
        <span className="text-red-500 font-bold">Production</span>
      </li>
      <li className="p-3 bg-white rounded-md shadow-md">
        <span className="text-red-500 font-bold">Personnel</span>
      </li>
      <li className="p-3 bg-white rounded-md shadow-md">
        <span className="text-red-500 font-bold">Commerce</span>
      </li>
      <li className="p-3 bg-white rounded-md shadow-md">
        <span className="text-red-500 font-bold">Materials</span>
      </li>
      <li className="p-3 bg-white rounded-md shadow-md">
        <span className="text-red-500 font-bold">Finance</span>
      </li>
    </ul>
  </div>
</div>

          <p>
            Each Department is headed by a Department head - Manager who reports to the Managing Director
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Our important e-mail id's</h2>
          <ul className="list-disc pl-5">
            <li>
              <a className="text-red-500" href="mailto:ho@cashewcorporation.com">
                ho@cashewcorporation.com
              </a>
            </li>
            <li>
              <a className="text-red-500" href="mailto:mdkscdc@cashewcorporation.com">
                mdkscdc@cashewcorporation.com
              </a>
            </li>
            <li>
              <a className="text-red-500" href="mailto:kscdc@kerala.gov.in">
                kscdc@kerala.gov.in
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">E-mail ids of sections:</h2>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4">
            {emailIdSection.map((value) => (
              <div
              data-aos="flip-left"
                key={value.title}
                className="mb-4 p-4 bg-white shadow-lg w-full"
              >
                <p className="font-bold">{value.title}</p>
                <a className="text-red-500" href={`mailto:${value.email}`}>
                  {value.email}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Contact email table */}
        <h3 className="text-xl font-bold mb-2">
          Contact details of our 30 factories
        </h3>
        {/* Search input for filtering factories based on location */}
        <div className="mb-4">
          <label htmlFor="search" className="sr-only">
            Search by location
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search by location"
            className="p-2 border rounded-md w-full"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            {/* head */}
            <thead>
              <tr>
                <th className="border p-2"></th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Phone Number</th>
                <th className="border p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {filteredFactories.map((value) => (
                <tr key={value.factoryNo}>
                  <th className="border p-2">{value.factoryNo}</th>
                  <td className="border p-2">{value.location}</td>
                  <td className="border p-2">{value.phoneNumber}</td>
                  <td className="border p-2">{value.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* body closes */}
      <Footer />
    </div>
  );
}

export default Organization;

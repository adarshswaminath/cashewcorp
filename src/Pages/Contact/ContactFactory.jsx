import React,{useState} from 'react'
import { factoriesData } from '../Org'

function ContactFactory() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter factories based on location
  const filteredFactories = factoriesData.filter((factory) =>
    factory.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
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
  )
}

export default ContactFactory
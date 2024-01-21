import React, { useState } from 'react';
import { franchiseeData } from ".";

function FranchiseeTable() {
  const [searchDistrict, setSearchDistrict] = useState('');

  const filteredFranchisees = franchiseeData.filter(
    (franchisee) =>
      franchisee.district.toLowerCase().includes(searchDistrict.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Search by District:</label>
        <input
          type="text"
          value={searchDistrict}
          onChange={(e) => setSearchDistrict(e.target.value)}
          className="mt-1 p-2 border rounded-md outline-none"
          placeholder="Enter Location ..."
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>District</th>
              <th>Address</th>
              <th>Contact Name</th>
              <th>Ph.No</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {filteredFranchisees.map((value) => (
              <tr key={value.id} className="bg-base-200">
                <th>{value.id}</th>
                <td>{value.name}</td>
                <td>{value.district}</td>
                <td>{value.address}</td>
                <td>{value.contact_name ? value.contact_name : "Null"}</td>
                <td>{value.mob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FranchiseeTable;

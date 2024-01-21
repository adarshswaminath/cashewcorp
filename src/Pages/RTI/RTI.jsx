import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function RTI() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow p-6 bg-gray-100">
        <div className="banner bg-blue-500 p-6 text-white">
          <h1 className="text-3xl font-bold">Right To Information</h1>
        </div>

        <div className="mt-6 p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            MODE OF PAYMENT OF FEES UNDER RIGHT TO INFORMATION ACT, 2005
          </h2>
          <p className="text-gray-700 leading-7">
            Gazette Notification dated 22.12.2007 and 03.06.2008 by which the
            procedure for remittance of fee for providing information in the
            case of Public Authorities other than Government Departments is
            amended vide Government Order No. GO (P) No. 540/2007/GAD dated
            18th December, 2007 as detailed below:
          </p>
          <p className="text-gray-700 leading-7 mt-4">
            “provided that in the case of public authorities other than the
            Government Departments, the fee shall be remitted to the account of
            such public authority as provided in clauses (c) and (d) of rule
            3”.
          </p>
          <p className="text-gray-700 leading-7 mt-4">
            Clauses c & d are specified as follows:
          </p>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mt-2">
            <li>
              by cash remittance against proper receipt in the Office of the
              Public Information Officer/Assistant Public Information Officer
              as the case may be, or
            </li>
            <li>
              by Demand Draft/banker's cheque/pay order payable to the Public
              Information Officer/Assistant Public Information Officer.
            </li>
          </ul>
          <p className="text-gray-700 leading-7 mt-4">
            In view of the above Government Order, it is hereby informed that
            applications under Right to Information Act will only be accepted
            with application fee as per clause (c) and (d) of Rule (3) of the
            Right to Information (Fee and Cost) Rules 2006 and court fee stamp,
            postal orders, and treasury challan will not be accepted as
            application fees for the applications under the Right to Information
            Act, 2005.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RTI;

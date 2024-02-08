import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import Accordion from "../../Components/Accordion";
import RITCard from "./RITCard";

const RTI = () => {
  const data = [
    { title: "INFORMATION OFFICERS AND APPELLATE AUTHORITY",content:<RITCard /> },
    { title: "MODE OF PAYMENT OF FEES UNDER RIGHT TO INFORMATION ACT, 2005",content:`Gazette Notification dated 22.12.2007 and 03.06.2008 by which the procedure for remittance of fee for providing information in the case of Public Authorities other than Government Departments is amended videGovernment Order No. GO (P) No. 540/2007/GAD dated 18th December, 2007as detailed below:“provided that in the case of public authorities other than the GovernmentDepartments, the fee shall be remitted to the account of such publicauthority as provided in clauses (c) and (d) of rule 3”.Clauses c & d are specified as follows:c) by cash remittance against proper receipt in the Office of the Public Information Officer/Assistant Public Information Officer as the case maybe, ord) by Demand Draft/bankers cheque/pay order payable to the Public Information Officer/ Assistant Public Information Officer.In view of the above Government Order, it is hereby informed that applications under Right to Information Act will only be accepted with application fee as per clause (c) and (d) of Rule (3) of the Right to Information (Fee and Cost) Rules 2006 and court fee stamp, postal orders and treasury chalan will not be accepted as application fees for the applications under the Right to Information Act, 2005.` },
    { title: "SUO MOTO DISCLOSURE",content:"http://www.cashewcorporation.com/ml/wp-content/uploads/2017/06/04.04.2017-Suo-Moto-Disclosure-1.pdf" },
    { title: "RIGHT TO INFORMATION ACT, 2005",content:<RITCard /> },
    { title: "ORGANIZATIONAL STRUCTURE",content:<RITCard /> },
    { title: "OUR FACTORIES – NAME OF MANAGERS AND PHONE NUMBERS",content:<RITCard /> },
    { title: "STAFF RULES",content:<RITCard /> },
    { title: "CERTIFIED STANDING ORDER",content:<RITCard /> },
    { title: "IRC SETTLEMENT – COPY",content:<RITCard /> },
    { title: "PAY SCALE",content:<RITCard /> },
    { title: "MINIMUM WAGE NOTIFICATION – 2011",content:<RITCard /> },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-6 bg-gray-100">
        <Banner image="rit.jpg" />
      </div>

      <div className="px-12">
        {data.map((value, index) => (
          <Accordion key={index} title={value.title} content={value.content} />
        ))}
      </div>

      {/* <div className="mt-6 flex flex-col gap-4 items-center mb-2">
        {contacts.map((contact, index) => (
          <div key={index} className="">
            <ContactCard {...contact} />
          </div>
        ))}
      </div> */}
      <Footer />
    </div>
  );
};

export default RTI;

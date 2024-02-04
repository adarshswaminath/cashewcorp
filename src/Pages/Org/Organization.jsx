import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { emailIdSection, factoriesData } from ".";
import Banner from "../../Components/Banner";
import Accordion from "../../Components/Accordion";

const CashewKernels = () => (
  <div>
    <ul className="list-disc">
      <li>Jumbo Size</li>
      <li>White Wholes 180 / 210 / 240 / 320 / 450</li>
      <li>Scorched Wholes (SW)</li>
      <li> Scorched Wholes Second (SSW)</li>
      <li> Dessert Wholes (DW)</li>
      <li>Butts (B)</li>
      <li> Splits (S)</li>

      <li> Large White Pieces (LWP)</li>
      <li> Small White Pieces (SWP)</li>
      <li> Baby Bits (BB) Scorched Butts (SB)</li>
      <li> Scorched Splits (SS)</li>
      <li> Scorched Pieces (SP)</li>
      <li> Second Small Pieces (SSP)</li>
      <li>Scorched Pieces Seconds (SPS)</li>
      <li> Dessert Pieces (DP)</li>
    </ul>
  </div>
);

const emailData = [
  { id: 1, type: "General", email: "ho@cashewcorporation.com" },
  { id: 2, type: "Chairman", email: "chairman@cashewcorporation.com" },
  { id: 3, type: "Managing Director", email: "md@cashewcorporation.com" },
  { id: 4, type: "General Inquiry", email: "kscdc@kerala.gov.in" },
];
const deptData = [
  { department: "MD’s Office", email: "mdkscdc@cashewcorporation.com" },
  {
    department: "Materials Dept./Sec. - Sub",
    email: "materials@cashewcorporation.com",
  },
  {
    department: "Materials Dept./Sec. - Sub",
    email: "cdc.materials@gmail.com",
  },
  { department: "Commerce", email: "cdc.commerce@gmail.com" },
  { department: "Sales", email: "sales@cashewcorporation.com" },
  { department: "Online Sales", email: "onlinesales@cashewcorporation.com" },
  { department: "Finance", email: "afm@cashewcorporation.com" },
  { department: "Personnel", email: "personnel@cashewcorporation.com" },
  { department: "Personnel", email: "esi@cashewcorporation.com" },
  { department: "Personnel", email: "epf@cashewcorporation.com" },
  { department: "Personnel", email: "welfare@cashewcorporation.com" },
  { department: "Production", email: "production@cashewcorporation.com" },
  { department: "Internal Audit", email: "Audit@cashewcorporation.com" },
];
const DeptTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name of the Department/Section</th>
            <th>Dept./Sec. - Sub</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>MD's Office</td>
            <td> </td>
            <td>mdkscdc@cashewcorporation.com</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Materials</td>
            <td> </td>
            <td>materials@cashewcorporation.com cdc.materials@gmail.com</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Commerce</td>
            <td></td>
            <td>cdc.commerce@gmail.com</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>4</th>
            <td></td>
            <td>Sales</td>
            <td>sales@cashewcorporation.com</td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>5</th>
            <td></td>
            <td>Online Sales</td>
            <td>onlinesales@cashewcorporation.com</td>
          </tr>
          {/* row 6 */}
          <tr>
            <th>6</th>
            <td>Finance</td>
            <td></td>
            <td>afm@cashewcorporation.com</td>
          </tr>
          {/* row 7 */}
          <tr>
            <th>7</th>
            <td>personnel</td>
            <td></td>
            <td>personnel@cashewcorporation.com</td>
          </tr>
          {/* row 8 */}
          <tr>
            <th>8</th>
            <td></td>
            <td></td>
            <td>si@cashewcorporation.com</td>
          </tr>
          {/* row 9 */}
          <tr>
            <th>9</th>
            <td></td>
            <td></td>
            <td>epf@cashewcorporation.com</td>
          </tr>
          {/* row 10 */}
          <tr>
            <th>10</th>
            <td></td>
            <td></td>
            <td>welfare@cashewcorporation.com</td>
          </tr>
          {/* row 11 */}
          <tr>
            <th>11</th>
            <td>production</td>
            <td></td>
            <td>production@cashewcorporation.com</td>
          </tr>
          {/* row 12 */}
          <tr>
            <th>12</th>
            <td>Internal Audit</td>
            <td></td>
            <td>Audit@cashewcorporation.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const EmailTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th className="text-xl font-bold">Our important e-mail id's</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {emailData.map((email) => (
            <tr>
              <th>
                <a href={`mailto:${email.email}`} className="underline">
                  {email.email}
                </a>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Organization() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Banner image="organization.jpg" />
      {/* body  */}
      <div className="p-5 lg:flex gap-10 items-start justify-start w-full">
        <div className="w-full">
          <h1 className="text-3xl font-bold">Organization</h1>
          <p className="mt-3">
            The Kerala State Cashew Development Corporation Ltd. Cashew House,
            Mundakkal, Kollam, Kerala, India - 691001 Grams: Kasuvandi
          </p>
          {/* ------------------- */}
          <h2 className="text-xl font-bold mt-3">Functions and Duties</h2>
          <p className="mt-3 w-full">
            Kerala State Cashew Development Corporation Ltd (KSCDC Ltd) is a
            registered company under Indian Companies Act and was incorporated
            in July 1969. It started Commercial activities in the year 1971 as a
            company fully owned by the Govt. of Kerala.
          </p>
          <p className="mt-3 w-full">
            It is governed by board of Directors consisting of Chairman,
            Managing Director non official Directors and official Directors. The
            board is headed by the Chairman and the chief executive is the
            Managing Director, who is appointed by the Govt.
          </p>
          <p className="mt-3 w-full">
            All policy matters of the corporation are decided by the board that
            to under the instruction by the Govt. For assisting the Managing
            Director there are six departments headed by HOD as designated
            below. Apart from this there is a company secretary.
          </p>
          <pre className="mt-6 grid gap-y-1">
            <span>1. Materials Department : HOD (Materials Manager)</span>
            <span>2. Commerce Department : HOD (Commercial Manager)</span>
            <span>3. Finance Department : HOD (Finance Manager)</span>
            <span>4. Personnel Department : HOD (Personnel Manager)</span>
            <span>5. Production Department : HOD (Production Manager)</span>
            <span>6. Internal Auditing : HOD (Internal Audit Officer)</span>
          </pre>
        </div>
        {/* second section */}
        <div className="w-full">
          <p className="mt-3">
            From the modest beginning in 1969, corporation has now grown into a
            large organization playing pivotal role in cashew industry. At
            present KSCDC have running 30 factories all over Kerala and nearly
            15,000 workers, out of which 95% are women.
          </p>
          {/* ------------------- */}

          <p className="mt-3 w-full">
            KSCDC factories are managed by Asst. Factory Managers and assisted
            by factory clerks. For the inspection of cashew factories there are
            officers designated as Inspectors.
          </p>
          <p className="mt-3 w-full">
            The KSCDC was set by the State Govt. with a view to grooming it as a
            model employer in the field of cashew industry, benefiting thousands
            of workers.
          </p>
          <p className="mt-3 w-full">
            KSCDC Ltd is enlarged in the processing of RCN (Raw Cashew Nuts) and
            marketing cashew kernels domestically and abroad. It also
            manufactures value added cashew products.
          </p>
          <p className="mt-3 w-full">
            KSCDC function as a model employer in the industry giving all the
            statutory benefits to the workers. This has positively impacted the
            work conditions of the other 3,00,000 workers in private sector as
            these units were also compelled to try to match the benefits offered
            by us with support from Govt. of Kerala, KSCDC has now transformed
            into dependable employer to employees, a reliable supplier to buyer.
          </p>
        </div>
      </div>
      <div></div>
      <div className="p-5 w-full lg:w-2/3  mx-auto justify-center">
        <Accordion
          title={"Cashew Processing"}
          content={`Traditional Drum Roasting: Raw Cashew Nuts processing start with roasting. We
have been processing our raw Cashew nuts by drum roasting to remove the
complete shell oil. Traditionally roasted Cashew has a very intense flavor and
crispiness, which can’t be compared to any of the other processing techniques.`}
        />

        <Accordion
          title={`Our Products`}
          content={`The KSCDC Processes Cashew into different grades and forms, including value
added products from Cashew like Cashew Soup, Cashew Vita, Cashew Powder and
Cashew Apple to Cashew Apple Pine Jam, Cashew Apple Syrup and Cashew Apple
Aerated Soda. All these products are the outcome of years of through research on
the nutritional and health aspects of Cashew Nut. Studies have proved that there
isn’t a healthier and nutritious all time snack than Cashew Nut. The Cashew Nut
rich in vitamins, minerals, carbohydrates and proteins that promote good healthy
life for all age groups
Cashew nuts are excellent source of protein, carbohydrate, fiber, iron and
potassium. It is cholesterol free with a 4:1 ratio unsaturated fat to saturated
fat. The antioxidants in the cashews, beta carotene and vitamin E, help the
body fight against diseases.`}
        />
      </div>
      <div className="flex p-5 gap-20 justify-center ">
        <div>
          <h3 className="font-bold text-xl">
            Value added products from cashew Kernels in 15 exciting forms
          </h3>
          <ul>
            <li className="mt-4"> 1. Cashew Kernels (Plain & Roasted)</li>
            <li>2. Red-Chilly Coated Cashews</li>
            <li>3. Chilly-Garlic Coated Cashews</li>
            <li>4. Salt & Pepper Coated Cashews</li>
            <li>5. Cashew Vita Chocolate</li>
            <li>6. Cashew Vita Cardamom</li>
            <li>7. Cashew Vita Vanilla</li>
            <li>8. Cashew Vita Pistachio9. Cashew-Vanilla Milkshake Powder</li>
            <li>10. Cashew Powder</li>
            <li>11. Cashew Vita</li>
            <li>12. Cashew Soup</li>
            <li>13. Cashew Apple Syrup</li>
            <li>14. Cashew Apple Pine Jam</li>
            <li>15. Cashew Apple Aerated Soda</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-xl font-bold"> Cashews are rich in</h3>
          <ul>
            <li>1.Zinc </li>
            <li>2.Copper</li>
            <li>3.Selenium</li>
            <li>4.Iron</li>
            <li>5.Magnesium </li>
            <li>6.Calcium Potassium</li>
            <li>7.Proteins & Biotin </li>
            <li>8.Fiber Vitamin B5</li>
            <li>9.Phytochemicals </li>
            <li>10. Vitamin E</li>
          </ul>
        </div>
      </div>
      <div className="p-5 w-full lg:w-2/3  mx-auto justify-center">
        <Accordion
          title={"Specifications for Cashew Kernels"}
          content={<CashewKernels />}
        />
        <Accordion
          title={"Important Email IDs of KSCDC"}
          content={<EmailTable />}
        />
        <Accordion
          title={"Email Ids of KSCDC (Department/Sections)"}
          content={<DeptTable />}
        />
      </div>
      {/* body closes */}
      <Footer />
    </div>
  );
}

export default Organization;

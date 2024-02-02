// imports
import { FaBookOpen } from "react-icons/fa6";
import {MdProductionQuantityLimits } from "react-icons/md"
import { AiOutlineShop } from "react-icons/ai";


// hero section first cards
const enHeroCards = [
    {
        id: 1,
        title: "60+ Products",
        body: "KSCDC's premium products are available in domestic and international markets with various grades and weights",
        icon:<MdProductionQuantityLimits/>,
        link: "/product"
    },
    {
        id: 2,
        title: "120+ Outlets",
        body: "KSCDC operates 18+ factory outlets in our factories and 100+ franchise distribution outlets all over Kerala",
        icon:<AiOutlineShop/>,
        link: "/franchisee"},
    
    ,{
        id: 3,
        title: "Govt. of Kerala",
        body: `KSCDC started in July1969 is a public sector undertaking fully owned by the Government of Kerala, playing a pivotal role in the cashew industry.`,
        icon:<FaBookOpen/>,
        link: "/kscdc"
    }
]
// hero section leaders card 
const enleaderData = [
    {
      name: "Shri. Pinarayi Vijayan",
      position: "Hon'ble Chief Minister",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
      message: "Ullamco aliquip veniam nostrud enim excepteur eiusmod. Consectetur sint fugiat dolore fugiat ad ad adipisicing non anim proident. Nostrud pariatur occaecat commodo quis sit commodo. Sint nostrud fugiat id incididunt consectetur ullamco dolore qui esse incididunt qui pariatur dolore officia. Elit aliquip cillum mollit anim non consectetur duis non. Est sunt id nisi aliqua cupidatat non veniam culpa duis pariatur velit eiusmod labore sit. Sint veniam proident deserunt est ad Lorem commodo amet nisi aliquip Lorem aliquip.",
      image:
        "/images/cm.jpeg",
        title: "Hon. CM's Message"
    },
    {
      name: "Shri. P.Rajeeve",
      position: "Hon'ble Minister of Industries",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
      message: "Ex elit quis non qui tempor amet nisi laboris do cupidatat. Ea et excepteur consequat Lorem dolore occaecat velit in irure sunt do. Elit ea voluptate in et occaecat culpa officia et adipisicing excepteur mollit enim.",
      image:
        "https://minister-industries.kerala.gov.in/wp-content/uploads/2021/09/prajeev.jpg",
      title: "Hon. Minister's Message"
    },
    {
      name: "Shri. S.Jayamohan",
      position: "Chairman",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
      message: "Incididunt id velit consequat irure voluptate sunt velit minim magna reprehenderit eu. Voluptate eu enim laborum culpa cupidatat irure pariatur irure tempor adipisicing excepteur eu velit minim. Cupidatat velit cillum amet velit cupidatat quis dolor amet. Minim cillum officia dolor duis duis Lorem laboris incididunt nulla labore eiusmod.",
      image: "/images/chairman.png",
      title: "Chairman's Message"
    },
    {
      name: "Shri. Sunil John . K",
      position: "Managing Director",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
      message: "Laboris Lorem elit et ad non ullamco amet. Officia reprehenderit mollit nisi dolor qui pariatur pariatur deserunt velit officia anim culpa. Deserunt sit et veniam in ex occaecat ut veniam non Lorem dolore est aliquip amet. Pariatur deserunt cupidatat est culpa.",
      image: "/images/director.png",
      title: "Managing Director Message"
    },
  ];

// about section
const enAboutData = [
  {
    title: "Welcome to KSCDC",
    subtitle: "About Us",
    para_one: "The Kerala State Cashew Development Corporation Limited (KSCDC) was incorporated in July 1969 and started Commercial activities in the year 1971 as a company fully owned by the Government of Kerala. From the modest beginning in 1969 Corporation has now grown into a large organization playing a pivotal role in Cashew industry.KSCDC, an ISO 22000-2005 company, is running 30 cashew factories across Kerala State with an annual production capacity of 30,000 Metric Tonnes. More than 15000 workers and 500 staff members are working in these factories. KSCDC now have a turnover of Rs. 250 crore.",
    para_two: "KSCDC acts as a model employer in the field of cashew industry mainly to protect the interest of its workers and to provide maximum employment to them ensuring their statutory benefits like minimum wages, bonus and etc. prevailing in the cashew industry.With an objective to promote Cashew based Value Added Products KSCDC have over these years developed a variety of Value added Products from Cashew Apple and Cashew Kernels. These products are being widely appreciated in the domestic market and in the international market (see the Value Added products).",
    para_three: "KSDC also aims at backward integration of its product line and has promoted Cashew Plantations in association with the Kerala State Agency for Cashew Cultivation and have cultivated Cashew Plantation across 25 hectares in its facilities."
  }
]

export {enHeroCards,enleaderData,enAboutData}
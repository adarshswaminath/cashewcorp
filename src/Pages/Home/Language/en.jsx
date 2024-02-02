// imports
import { FaBookOpen } from "react-icons/fa6";
import {MdProductionQuantityLimits } from "react-icons/md"
import { AiOutlineShop } from "react-icons/ai";


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

export {enHeroCards}
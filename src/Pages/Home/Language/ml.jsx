// imports
import { FaBookOpen } from "react-icons/fa6";
import {MdProductionQuantityLimits } from "react-icons/md"
import { AiOutlineShop } from "react-icons/ai";


const mlHeroCards = [
    {
        id: 1,
        title: "66+ ഉൽപ്പന്നങ്ങൾ",
        body: "കാഷ്യൂ കോർപ്പറേഷന്റെ പ്രീമിയം ഉൽപ്പനങ്ങൾ വിവിധ ഗ്രേഡുകളിലും, തൂക്കത്തിലും   ആഭ്യന്തര അന്താരാഷ്ട്ര വിപണികളിൽ ലഭ്യമാണ്",
        icon:<MdProductionQuantityLimits/>,
        link: "/product"
    },
    {
        id: 2,
        title: "120+ Outlets",
        body: "കാഷ്യൂ കോർപ്പറേഷൻ്റെ ഫാക്ടറികളിൽ 18+ ഫാക്ടറി ഔട്ട്‌ലെറ്റുകളും കേരളത്തിലുടനീളം 100+ ഫ്രാഞ്ചൈസി വിതരണ ഔട്ട്‌ലെറ്റുകളും പ്രവർത്തിക്കുന്നു.",
        icon:<AiOutlineShop/>,
        link: "/franchisee"},
    
    ,
    {
        id: 3,
        title: "കേരള സർക്കാർ",
        body: `1969 ജൂലൈയിൽ ആരംഭിച്ച KSCDC, കശുവണ്ടി വ്യവസായത്തിൽ നിർണായക പങ്ക് വഹിക്കുന്ന, കേരള സർക്കാരിൻ്റെ പൂർണ്ണ ഉടമസ്ഥതയിലുള്ള ഒരു പൊതുമേഖലാ സ്ഥാപനമാണ്.`,
        icon:<FaBookOpen/>,
        link: "/kscdc"
    }
]


export {mlHeroCards}
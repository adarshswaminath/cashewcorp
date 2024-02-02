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

// hero section leaders card 
const mlleaderData = [
    {
      name: "ശ്രീ. പിണറായി വിജയൻ",
      position: "ബഹു. കേരള മുഖ്യമന്ത്രി",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
      message: "Ullamco aliquip veniam nostrud enim excepteur eiusmod. Consectetur sint fugiat dolore fugiat ad ad adipisicing non anim proident. Nostrud pariatur occaecat commodo quis sit commodo. Sint nostrud fugiat id incididunt consectetur ullamco dolore qui esse incididunt qui pariatur dolore officia. Elit aliquip cillum mollit anim non consectetur duis non. Est sunt id nisi aliqua cupidatat non veniam culpa duis pariatur velit eiusmod labore sit. Sint veniam proident deserunt est ad Lorem commodo amet nisi aliquip Lorem aliquip.",
      image:
        "/images/cm.jpeg",
        title: "Hon. CM's Message"
    },
    {
      name: "ശ്രീ. പി. രാജീവ്",
      position: "ബഹു. കേരള വ്യവസായ വകുപ്പ് മന്ത്രി",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
      message: "Ex elit quis non qui tempor amet nisi laboris do cupidatat. Ea et excepteur consequat Lorem dolore occaecat velit in irure sunt do. Elit ea voluptate in et occaecat culpa officia et adipisicing excepteur mollit enim.",
      image:
        "https://minister-industries.kerala.gov.in/wp-content/uploads/2021/09/prajeev.jpg",
      title: "Hon. Minister's Message"
    },
    {
      name: "ശ്രീ. എസ്. ജയമോഹൻ",
      position: "ചെയർമാൻ",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
      message: "Incididunt id velit consequat irure voluptate sunt velit minim magna reprehenderit eu. Voluptate eu enim laborum culpa cupidatat irure pariatur irure tempor adipisicing excepteur eu velit minim. Cupidatat velit cillum amet velit cupidatat quis dolor amet. Minim cillum officia dolor duis duis Lorem laboris incididunt nulla labore eiusmod.",
      image: "/images/chairman.png",
      title: "Chairman's Message"
    },
    {
      name: "ശ്രീ. സുനിൽ ജോൺ .കെ",
      position: "മാനേജിംഗ് ഡയറക്ടർ",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inlabore laudantium deserunt fugiat numquam.",
      message: "Laboris Lorem elit et ad non ullamco amet. Officia reprehenderit mollit nisi dolor qui pariatur pariatur deserunt velit officia anim culpa. Deserunt sit et veniam in ex occaecat ut veniam non Lorem dolore est aliquip amet. Pariatur deserunt cupidatat est culpa.",
      image: "/images/director.png",
      title: "Managing Director Message"
    },
  ];
export {mlHeroCards,mlleaderData}
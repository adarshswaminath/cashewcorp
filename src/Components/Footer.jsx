import { Link } from "react-router-dom";
import {
  LuFacebook,
  LuGithub,
  LuGitlab,
  LuHammer,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";
let footerData = [
  {
    title: "Product",
    links: [
      "landing-page",
      "popup-builder",
      "web-design",
      "content",
      "integration",
    ],
  },
  {
    title: "Use Cases",
    links: ["web-design", "marketers", "small-business", "website-builder"],
  },
  {
    title: "Resources",
    links: ["academy", "blog", "themes", "hosting", "developers", "support"],
  },
  {
    title: "Company",
    links: ["about-us", "career", "faqs", "teams", "contact-us"],
  },
];

const backgroundImage =
  "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600";

function FooterLinks({ title, links }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <h3 className="font-bold">{title}</h3>
      {links.map((link, index) => (
        <Link key={index} to="/" className="capitalize">
          {link}
        </Link>
      ))}
    </div>
  );
}
function FooterSocialMediaPannel() {
  const socialMedis = [
    { icon: <LuFacebook />, link: "#" },
    { icon: <LuGitlab />, link: "#" },
    { icon: <LuGithub />, link: "#" },
    { icon: <LuTwitter />, link: "#" },
    { icon: <LuInstagram />, link: "#" },
    { icon: <LuLinkedin />, link: "#" },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 bg-white mt-3 text-black lg:w-3/4 rounded-lg">
      <h2 className="text-center font-extrabold tracking-wide">Follow us</h2>
      <div className="flex justify-evenly gap-3 m-2">
        {socialMedis.map((icon) => (
          <a
            href={icon.link}
            key={icon}
            className="text-xl transform transition ease-in-out duration-300 hover:scale-150 hover:-translate-y-2"
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}

function FooterCopyRight() {
  return (
    <div className="flex flex-col lg:flex-row justify-between text-gray-500 mt-2">
      <span className="text-sm mb-2 lg:mb-0">@ 2023 All Rights Reserved</span>
      <div className="text-sm grid grid-cols-2 gap-2 lg:grid-cols-5 text-white">
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>Sales and Refunds</span>
        <span>Legal</span>
        <span>Site Map</span>
      </div>
    </div>
  );
}


// main component
function Footer() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10 text-white p-4">
        {/* footer links */}
        <div className="grid gap-3 grid-cols-2  lg:grid-cols-4 place-items-center ">
          {footerData.map((data) => (
            <FooterLinks key={data.title} {...data} />
          ))}
        </div>
        {/* social media pannel */}
        <FooterSocialMediaPannel />
        <div className="flex items-center mx-auto justify-center bg-white/10 bg:blur backdrop-blur w-full lg:w-1/2  m-2 rounded-lg">
        <img src="https://www.safaccredited.org/images/ISO-22000.png" className="h-20 w-20 rounded-lg" alt="Footer image" />
        <img src="https://iconape.com/wp-content/png_logo_vector/anab-logo.png" className="h-20 w-20 rounded-lg" alt="Footer image" />
        <img src="/images/bsi.png" className="h-20 w-20 rounded-lg" alt="Footer image" />

        </div>
        {/* copy right section */}
        <FooterCopyRight/>
      </div>
    </div>
  );
}

export default Footer;

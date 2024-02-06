import { Link } from "react-router-dom";
import {
  LuFacebook,
  LuGithub,
  LuGitlab,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";

let footerData = [
  {
    title: "Product",
    values: [
      { path: "/product",label: "Plain Cashews" },
      { path: "/product",label: "Roasted And Salted"},
      { path: "/product", label: "Value Added Products"},
      { path: "/product",label: "Popular Products"},
      { path: "/product",label: "Premeium Products"},
      { path: "/product",label: "Online Shopping"},

    ],
  },
  {
    title: "Quick Links",
    values: [
      { path: '/kscdc', label: "KSCDC" },
      { path: '/org',label: "Organization" },
      { path: '/director-board', label: "Board Of Director"},
      { path: '/management',label: "Management" },
      { path: '/product-characteristics', label: "Product Characteristics" },
      { path: '/franchisee', label: "Franchisee" },
    ],
  },
  {
    title: "Sitemap",
    values: [
      { path: '/kscdc', label: "About Us" },
      { path: '/product',label: "Product" },
      { path: '/tender', label: "Tender"},
      { path: '/career',label: "Career" },
      { path: 'rti', label: "RTI" },
      { path: '/gallery', label: "Gallery" },
      { path: '/contact', label: "Contact" },
    ],
  },
  
];

const backgroundImage =
  "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600";

function FooterLinks({ title, values }) {
  console.table(values);
  return (
    <div data-aos="fade-up" className="flex flex-col items-start gap-3">
      <h3 className="font-bold">{title}</h3>
      {values.map((value, index) => (
        <Link key={value.path} to={value.path} className="capitalize">
          {value.label}
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
    <div className="flex items-center justify-center ">
      <div className="p-4 bg-white mt-3 text-black lg:w-3/4 rounded-lg">
        <h2 className="text-center font-extrabold tracking-wide">Follow us</h2>
        <div className="flex justify-evenly gap-3 m-2">
          {socialMedis.map((media) => (
            <a
              data-aos="flip-up"
              href={media.link}
              key={media.icon}
              className="text-xl transform transition ease-in-out duration-300 hover:scale-150 hover:-translate-y-2"
            >
              {media.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function FooterCopyRight() {
  return (
    <div className="flex flex-col lg:flex-row justify-between text-gray-500 ">
      <span className="text-sm mb-2 lg:mb-0">@ 2024 All Rights Reserved</span>
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
      className="relative bg-cover bg-center bg-no-repeat min-h-screen bg-gray-900"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10 text-white p-4 mt-4">
        <h2 data-aos="fade-right" className="text-center text-5xl font-bold">
          KSCDC
        </h2>
        {/* footer links */}
        <div className="grid gap-3 lg:flex items-center justify-evenly mb-6">
          {footerData.map((data) => (
            <FooterLinks key={data.title} {...data} />
          ))}
        </div>
        {/* social media pannel */}
        <FooterSocialMediaPannel />
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4 mx-auto justify-center bg-white/10 p-2 bg:blur backdrop-blur w-full lg:w-1/2  m-2 rounded-lg">
            <img
              src="/images/footer1.png"
              className="h-20 w-20 rounded-lg"
              alt="Footer image"
            />
            <img
              src="/images/footer2.png"
              className="h-20 w-20 rounded-lg"
              alt="Footer image"
            />
            <img
              src="/images/footer3.png"
              className="h-20 w-20 rounded-lg"
              alt="Footer image"
            />
            <img
              src="/images/footer4.png"
              className="h-28 w-28 rounded-lg"
              alt="Footer image"
            />
            <div className="flex flex-col items-center">
              <img
                src="/images/footer5.png"
                className="h-[75px] w-[75px] rounded-lg"
                alt="Footer image"
              />
              <p className="text-xs font-bold">On Time Delivery</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-between w-3/4">
            <img
              data-aos="zoom-out-right"
              src="/images/logo-2.png"
              className="object-contain h-72 w-72"
              alt="gov image"
            />
            <img
              data-aos="fade-up"
              src="/images/fssai.png"
              className="object-contain h-44 w-44 rounded-xl"
              alt="gov image"
            />
            <img
              data-aos="zoom-out-left"
              src="/images/CDC.png"
              className="object-contain h-44 w-44"
              alt="gov image"
            />
          </div>
        </div>
        {/* copy right section */}
        <FooterCopyRight />
      </div>
    </div>
  );
}

export default Footer;

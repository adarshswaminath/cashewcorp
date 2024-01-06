const ConsultancyAgency = () => {
  return (
    <div className="flex items-center justify-evenly p-8">
      <div>
        <h2 className="text-lg lg:text-xl font-semibold">
          Consultancy Agency For Your Bussiness
        </h2>
        <p className="text-gray-500">the quick fox jump over the lazy fox</p>
      </div>
      <button className="btn bg-orange-400 hover:bg-orange-500 text-white">
        Contact Us
      </button>
    </div>
  );
};

const footerData = [
  {
    title: "Service",
    body: ["Branding", "Design", "Marketing", "Advertisment"],
  },
  {
    title: "Company",
    body: ["About us", "Contact", "Jobs", "Press kit"],
  },
  {
    title: "Legal",
    body: ["Terms of use", "Privacy Policy", "Cookie Policy"],
  },
];

function Footer() {
  return (
    <main>
      <ConsultancyAgency />
      <footer className="footer p-10 bg-emerald-900 text-neutral-content">
        {footerData.map((value, index) => (
          <nav key={index}>
            <header className="footer-title">{value.title}</header>
            {value.body.map((bodyIndex) => (
              <a
                key={bodyIndex}
                href={bodyIndex.toLowerCase().split(" ").join("")}
                className="link link-hover"
              >
                {bodyIndex}
              </a>
            ))}
          </nav>
        ))}
      </footer>
    </main>
  );
}

export default Footer;

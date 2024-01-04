const ConsultancyAgency = () => {
  return (
    <div className="flex items-center justify-evenly p-8">
      <div>
        <h2 className="text-lg lg:text-xl font-semibold">
          Consultancy Agency For Your Bussiness
        </h2>
        <p className="text-gray-500">the quick fox jump over the lazy fox</p>
      </div>
      <button className="btn bg-orange-400 hover:bg-orange-500 text-white">Contact Us</button>
    </div>
  );
};

function Footer() {
  return (
    <main>
      <ConsultancyAgency />
      <footer className="footer p-10 bg-emerald-900 text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </main>
  );
}

export default Footer;

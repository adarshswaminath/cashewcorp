function PlayStore() {
  return (
    <div className="bg-gradient-to-r from-[#ED213A] to-[#93291E] flex flex-col items-center justify-center">
      <div className="lg:flex items-center justify-between grid ">
        {/* app layout */}
        <div className="relative text-white text-4xl flex flex-col items-center justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-white shadow-lg"></div>
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            src="/images/phone.png"
            className="relative"
            alt="mobile app"
          />
        </div>
        {/* btns */}
        <div className="">
          <h2 data-aos="zoom-in" className="text-3xl lg:text-5xl text-white font-bold">
            Try Our KSCDC Mobile Apps
          </h2>
          <p data-aos="zoom-in" className="max-w-xl  mt-4 text-white">
            Occaecat aute nisi non excepteur Lorem excepteur proident tempor et
            excepteur do deserunt.
          </p>
          <div className="flex items-center">
            <img
              data-aos="zoom-out"
              src="/images/google-play.png"
              className="h-24"
              alt="Playstrore image"
            />
            <img
              data-aos="zoom-out"
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-mac-app-store.svg"
              className="h-16"
              alt="playstore image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayStore;

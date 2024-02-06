import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import DirectorCard from "./DirectorCard";

const DirectorsData = [
  {
    image: "/images/directors/chairman.png",
    title: "Shri. S.Jayamohan",
    caption: "Chairman",
    email: "chairman@cashewcorporation.com"
  },
  {
    image: "/images/directors/dir-1.png",
    title: "Shri. Sunil John .K",
    caption: "Managing Director",
    email: "md@cashewcorporation.com"

  },
  {
    image: "/images/directors/dir-9.png",
    title: "Shri. B. Pratheep Kumar",
    caption: "Director",
    email: "cmcashewcorporation@gmail.com"

  },
  {
    image: "/images/directors/dir-10.png",
    title: "Shri. Siju Jacob",
    caption: "Director",
    email: "cmcashewcorporation@gmail.com"

  },
  {
    image: "/images/directors/dir-8.png",
    title: "Dr. B S Suran",
    caption: "Director",
    email: "cmcashewcorporation@gmail.com"

  },
  {
    image: "/images/directors/dir-4.png",
    title: "Shri. B Sujeendran",
    caption: "Director",
    email: "cmcashewcorporation@gmail.com"

  },
  {
    image: "/images/directors/dir-5.png",
    title: "Shri. G. Babu",
    caption: "Director",
    email: "cmcashewcorporation@gmail.com"

  },
  {
    image: "/images/directors/dir-7.png",
    title: "Shri. Saji D. Anand",
    caption: "Director",
    email: "cmcashewcorporation@gmail.com"

  },
  {
    image: "/images/directors/dir-6.png",
    title: "Adv. Sooranadu S Sreekumar",
    caption: "Director",
    email: "cmcashewcorporation@gmail.com"

  },
];

function DirectorBoardPage() {
  return (
    <div>
      <Navbar />
      <Banner image="directorboard1.jpg" />
      <h3 className="text-center text-3xl font-semibold text-red-400">Our Board Of Directors</h3>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center p-5">
        {DirectorsData.map((data) => (
          <DirectorCard 
          title={data.title}
          caption={data.caption}
          email={data.email}
          image={data.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DirectorBoardPage;

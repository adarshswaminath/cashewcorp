import React from "react";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold my-8">Gallery</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex flex-col items-center my-6">
          <img
            src="https://cashewcorporation.com/wp-content/uploads/2017/09/T8A0351-1024x683.jpg"
            alt="Gallery image"
            className="mb-4 rounded-md w-full h-64 lg:h-auto"
          />
          <Link to="/gallery">
            {" "}
            <button className="px-5 py-2 bg-orange-500 text-white rounded-md mt-4">
              Visit Images
            </button>
          </Link>
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center my-6">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/xAfJ_pCJObM?si=_YryQkjStOD0Ds0M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-md"
          ></iframe>
          <Link to="/gallery">
            {" "}
            <button className="px-5 py-2 bg-orange-500 text-white rounded-md mt-4">
              Visit Video
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

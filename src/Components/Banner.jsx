import React from "react";

function Banner({image}) {
  return (
    <div className=" h-96 mb-6 overflow-hidden">
      <img
        className="object-cover object-center w-full h-full z-50"
        src={`/images/banner/${image}`}
        alt="Banner"
      />
    </div>
  );
}

export default Banner;

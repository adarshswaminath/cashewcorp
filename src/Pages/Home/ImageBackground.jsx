import React from "react";

function ImageBackground() {
  return (
    <div className="relative h-96 mb-6 overflow-hidden">
      <img
        className="object-cover object-center w-full h-full"
        src="/images/company.jpeg"
        alt="Banner"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
}

export default ImageBackground;

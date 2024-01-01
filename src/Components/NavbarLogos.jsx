import React from "react";


function NavbarLogos() {
  return (
    <div className="p-2 hidden lg:flex md:flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://cashewcorporation.com/wp-content/themes/kscdc/images/logo.png"
          className="h-20"
          alt="logo image"
        />
        <img
          src="https://cashewcorporation.com/wp-content/themes/kscdc/images/cdc-logo.jpg"
          className="h-20"
          alt="second logo"
        />
      </div>
      <div>
      <button className='bg-[#ff9a3d] px-6 p-2 rounded-lg font-medium hover:text-white'>Online Shop</button>
      </div>
    </div>
  );
}

export default NavbarLogos;

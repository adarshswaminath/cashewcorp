import React from 'react';


function ContactUs() {
  return (
    <div className="bg-gray-100">
      <div className="grid lg:flex justify-between p-2 w-full">
        <img src="/images/map.svg" alt="svg image" className='w-full lg:w-1/2' />
        <div className="container mx-auto  w-full lg:w-1/2">
        <div
          className="bg-white p-8 rounded-lg shadow-lg mb-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="text-3xl font-bold mb-6">Contact Details</h1>
          <p className="text-xl font-semibold">The Kerala State Cashew Development Corporation Limited</p>
          <p className="mb-4 font-bold">A Government of Kerala Undertaking</p>
          <p className="mb-4">Cashew House, Mundakkal, Kollam, Kerala, India - 691 001</p>

          <div className="mb-4">
            <p><span className='font-semibold'>Phone:</span> +91 474 2742271, 2742172, 2742273, 2742954</p>
          </div>

          <div className="mb-4">
            <p><span className='font-semibold'>Gram:</span> 'KASUVANDI'</p>
          </div>

          <div className="mb-4">
            <p> <span className='font-semibold'>Email</span> kscdc@kerala.gov.in | ho@cashewcorporation.com</p>
          </div>

          <div className="mb-4">
            <p><span className='font-semibold'>CIN:</span>U15493KL1969SGC002234</p>
          </div>

          <hr className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold">Head Office:</p>
              <p>Mundakkal, Kollam</p>
            </div>

            <div>
              <p className="font-semibold">Factory Offices:</p>
              <p>30 Factory Offices</p>
            </div>

            <div>
              <p className="font-semibold">Value Addition Unit:</p>
              <p>Located somewhere</p>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
        </div>
      </div>
      </div>
      <iframe
            title="Kerala State Cashew Development Corporation Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15768.139889813081!2d76.59537003572802!3d8.876336337981755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fc61db7ef89d%3A0x26f601582e1853e6!2sKerala+State+Cashew+Development+Corporation!5e0!3m2!1sen!2sin!4v1426072995584"
            width="100%"
            height="400"
            frameBorder="0"
            className="  object-cover"
          ></iframe>
    </div>
  );
}

export default ContactUs;

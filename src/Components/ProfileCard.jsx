import React, { useEffect } from "react";
import "./style/profilecard.css";

function ProfileCard({ name, image, position, content, link ,title}) {
  return (
    <section data-aos-duration="800" data-aos="zoom-in-right">
      <div className="container group">
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={image} alt={name} />
            </div>
            <div className="contentBx">
              <h3 className="text-[#FF1E1E] font-bold group-hover:opacity-0">
                {name}
                <br />
                <span className="text-black">{position}</span>
              </h3>
            </div>
          </div>
          <ul className="sci ">
            <li className="bg-white max-w-64">
              <p className="font-extrabold mb-2">{title}</p>
              {Array.isArray(content) ? (
                <>
                  <p>{content[0]}</p>
                  <p>{content[1]}</p>
                  <p>{content[2]}</p>
                  <p>{content[3]}</p>

                </>
              ) : (
                <p>{content}</p>
              )}
            </li>
            <li className="bg-white">
              {link ? (
                <a href={link}>
                  <button className="btn  bg-blue-500 text-white mt-2 border hover:border-blue-500 hover:bg-white hover:text-blue-500">
                    Read More
                  </button>
                </a>
              ) : (
                <button></button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;

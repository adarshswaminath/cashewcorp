import React, { useEffect } from "react";
import "./style/profilecard.css";

function ProfileCard({ name, image, position, content, link }) {
  return (
    <section>
      <div className="container group">
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={image} />
            </div>
            <div className="contentBx">
              <h3 className="text-red-500 font-bold group-hover:opacity-0">
                {name}
                <br />
                <span className="text-black">{position}</span>
              </h3>
            </div>
          </div>
          <ul className="sci ">
            <li className="bg-[#F4F5F6] max-w-64">
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
            <li className="bg-[#F4F5F6]">
              {link ? (
                <a href={link}>
                  <button className="btn hover:bg-indigo-500 bg-blue-500 text-white mt-2">
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

import React, { useEffect } from 'react';
import "./style/profilecard.css";

function ProfileCard({ name, image, position, content,link }) {
  
  return (
    <section>
    <div className="container">
        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={image}/>
                </div>
                <div className="contentBx">
                    <h3>{name}<br/><span>{position}</span></h3>
                </div>
            </div>
            <ul className="sci ">
                <li className='bg-[#F4F5F6]'>
                    <p>{content}</p>
                </li>
                <li className='bg-[#F4F5F6]'>
                    {link ? (
                        <a href={link}>
                            <button className='btn hover:bg-indigo-500 bg-blue-500 text-white mt-2'>Read More</button>
                        </a>
                    ) : <button></button>}
                </li>
            </ul>
        </div>
      
        
    </div>
</section>
  );
}

export default ProfileCard;

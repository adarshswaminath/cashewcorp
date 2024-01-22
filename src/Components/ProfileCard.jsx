import React from 'react'
import "./style/profilecard.css"

function ProfileCard({name,image,position,content}) {
  return (
    <div className="container">
           <div class="card">
    <div class="face face1">
        <div class="content">
            <img src={image}/>
            <h3>Design</h3>
        </div>
    </div>
    <div class="face face2">
        <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                <a href="#">Read More</a>
        </div>
    </div>
</div>
    </div>

  )
}

export default ProfileCard
import React from 'react'

const videoLinks = [
    'https://www.youtube.com/embed/Dpd9niaYGLA?si=RTpPzW-2k3qcSVXC',
    'https://www.youtube.com/embed/xAfJ_pCJObM?si=enw53IEdT1Y9_Uoo',
    'https://www.youtube.com/embed/wxY7QP_F9UY?si=vxMuP45YSN8HIefu"',
    'https://www.youtube.com/embed/IW2jsY8_wCo?si=S4HFylFq5kTBHyE4"',
    'https://www.youtube.com/embed/P0_Ur86QHJ8?si=Ktt68USX9Y8JNbX-',

]


function Videos() {
  return (
    <div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 p-3">
      {videoLinks.map((_,index) => (
          <iframe key={index} width="560" height="315" src={videoLinks[index]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      ))}
        </div>
    </div>
  )
}

export default Videos
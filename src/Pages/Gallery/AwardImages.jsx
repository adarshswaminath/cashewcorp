import React from 'react'

function AwardImages() {
  return (
    <div>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        {Array.from({length:4}).map((_,index) => (
            <img src={`/images/gallery/awards/${index+1}.jpg`} alt="" />
        ))}
        </div>
    </div>
  )
}

export default AwardImages
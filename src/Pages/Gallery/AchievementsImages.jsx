import React from 'react'

function AchievementsImages() {
  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-5">
        {Array.from({length:5}).map((_,index) => (
            <img className='' src={`/images/gallery/achievments/${index+1}.png`} alt={`/images/products/product-${index+1}.png`} />
        ))}
        </div>
    </div>
  )
}

export default AchievementsImages
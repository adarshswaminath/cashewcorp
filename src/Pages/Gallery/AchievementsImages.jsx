import React from 'react'

function AchievementsImages() {
  return (
    <div className='p-3'>
        <div className="grid grid-cols-1 gap-3 place-content-center justify-items-center lg:grid-cols-3">
        {Array.from({length:5}).map((_,index) => (
            <img className='' src={`/images/gallery/achievments/${index+1}.png`} alt={`/images/products/product-${index+1}.png`} />
        ))}
        </div>
    </div>
  )
}

export default AchievementsImages
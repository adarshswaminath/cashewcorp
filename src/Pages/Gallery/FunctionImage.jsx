import React from 'react'

function FunctionImage() {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-5">
    {Array.from({length:11}).map((_,index) => (
        <img className='' src={`/images/gallery/functions/${index+1}.jpg`} alt={`/images/products/product-${index+1}.png`} />
    ))}
    </div>
  )
}

export default FunctionImage
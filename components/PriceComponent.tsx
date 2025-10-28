import React from 'react'
interface PriceProp{
  price:string
}
export default function PriceComponent({price}:PriceProp) {
  return (
    <>
     <div className="flex gap-1">
          <h3 className="font-bold text-xl">{price}</h3>
          <span className="mt-1.5">جنيه</span>
        </div>
    </>
  )
}

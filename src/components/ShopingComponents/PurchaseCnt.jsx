import React, { useState } from 'react'

export const PurchaseCnt = () => {

  const [counter, setCounter] = useState(1)
  const price = 18.00 * counter

  return (
    <div className='purchase_wrapper'>
      <div className="counte_cnt">
        
        <div onClick={() => setCounter(counter == 1 ? counter = 1 : counter - 1)}>-</div>
        <span>{counter}</span>
        <div onClick={() => setCounter(counter + 1)}>+</div>
      
      </div>
     
      <button>ADD TO CARD | ${price.toFixed(2)}</button>
    </div>
  )
}

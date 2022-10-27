import React from 'react'
import { ReactComponent as Box } from "../../assets/box.svg"

export const Snacks = () => {
  return (
    <div className='snaks_wrapper'>
        <h2>ADD TO A BUNDLE</h2>
        <div className='bundle_box'>
            <Box />
            <div className='text_cnt'>
                <b>Want to try more flavours?</b>
                <p>Create your own sampler pack and choose your own adventure!</p>
            </div>
            <button>BUILD YOUR OWN BUNDLE</button>
        </div>
        <div className='snaks_cnt'>
        <h2>TRY OUT OUR OTHER SNACKS</h2>
            <div className='bundle_box'>
                <div className="curncies_cnt">
                    <img src="//cdn.shopify.com/s/files/1/0162/2468/products/truffle-mini-popcorn-popcorn-pipsnacks-llc-429842_small.png?v=1651609752" alt="" />
                    <div className='text_cnt'>
                        <b>Cheese Balls Variety Pack</b>
                        <p>4 Bags (4.5oz)</p>
                    </div>
                </div>
                <button className='btn'>ADD TO CART | $10.99 </button>
            </div>
            <div className='bundle_box'>
                <div className='curncies_cnt'>
                    <img src="//cdn.shopify.com/s/files/1/0162/2468/products/spicy-cheddar-mini-popcorn-popcorn-pipcorn-879965_small.png?v=1651609995" alt="" />
                    <div className='text_cnt'>
                        <b>Cheddar Cheese Balls</b>
                        <p>4 Bags (4.5oz)</p>
                    </div>
                </div>
                <button className='btn'>ADD TO CART | $10.99 </button>
            </div>
        </div>
    </div>
  )
}

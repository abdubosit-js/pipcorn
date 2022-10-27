import React, { Fragment, useState } from 'react';
import { Snacks } from './ShopingComponents/Snacks';
import { Subscribe } from './ShopingComponents/Subscribe';
import { StarsView } from './ShopingComponents/StarsView';
import { PurchaseCnt } from './ShopingComponents/PurchaseCnt';
import { WrapperShoping as Wrapper } from '../styles/ShopingStyle';

export const ShopingCnt = () => {

    const [isActive, setIsActive] = useState(false)
    const selected = ["One-time purchase: $18.00", "Subscribe & save (10%): $16.20"]

    return (
        <Wrapper>
            <StarsView />
            
            <div className="price_cnt">
                {isActive ? (
                    <h5>$16.20</h5>
                ) : (
                    <h5>$18.00</h5>
                )}
                <p>SELECT A SIZE</p>
            </div>

            <div className="select_size">
                <button className='bags'>4 Bags | $18.00</button>
                <button>24 Snack Size Bags | $36.00</button>
            </div>

            
            <div className="selected_wapper">
                {selected.map((select, index) => {
                    return (
                        <Fragment key={select}>
                            <input type="radio" name="option" id={index} hidden defaultChecked={index === 0} onClick={() => setIsActive(index === 1, true)} />
                            <label htmlFor={index}>{select}</label>
                        </Fragment>
                    )
                })}
                {isActive ? (
                    <div className="deliver_week_cnt">
                        <h3>Deliver Every</h3>
                        <select>
                            <option value="2">Weeks 2</option>
                            <option value="4">Weeks 4</option>
                        </select>
                    </div>
                ) : ("")}
            </div>

            <div className="purchase_and_subscribe">
                {isActive ? (
                    <Subscribe />
                ) : (
                    <PurchaseCnt /> 
                )}
            </div>
            
            <div className="image_wrapper_flex">

                <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/57/assets/PCwebiconsGlutenFree-1651068899715.png" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/57/assets/PCwebiconsvegan-1651068899717.png" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/57/assets/PCwebiconsNonGMO-1651068899721.png" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/57/assets/PCwebiconsheirloom-1651068899723.png" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/57/assets/PCwebiconsWholeGrain-1651068899725.png" alt="" />
            
            </div>

            <Snacks />
        </Wrapper>
    )
}

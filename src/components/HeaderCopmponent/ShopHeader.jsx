import React, { Fragment } from 'react'

export const ShopHeader = ({HeaderData,setOpen}) => {
  return (
    <div className='shop_cnt' onMouseEnter={() => setOpen(true)}  onMouseLeave={() => setOpen(false)}>
        <div className="top_content">
            <div className="title">
                <h2>CATIGORIES</h2>
                <p>Shop all</p>
            </div>

            <div className="top_content-flex">    
                {HeaderData.shopTitles.map((item) => 
                    <Fragment key={item.title}>
                        <div className="content">
                            <img src={item.img} alt="" />
                            <h3>{item.title}</h3>
                        </div>
                    </Fragment>
                )}

                <span></span>

                <div className="box_size">
                    
                    <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/bundles.png?v=145073649180553159731657294268" alt="" />
                    <p>Use our bundle bullder for a customized selection</p>
                    <div>BUILD YOUR OWN BUNDLE</div>
                
                </div>
            </div>
        </div>
        
        <div className="bottom_content">

            <div className="title">
                <h2>BESTSELLERS</h2>
            </div>

            <div className="top_content-flex">
                {HeaderData.bottomTitles.map((items) =>     
                    <div className="bottom_cnt" key={items.title}>
                        <img src={items.img} alt="" />
                        
                        <div>
                            <h4>{items.title}</h4>
                            <p>${items.price.toFixed(2)}</p>
                        </div>
                    </div>
                )}

                <b></b>
                <div className="shop_all">SHOP ALL</div>
            </div>
        </div>
    </div>
  )
}

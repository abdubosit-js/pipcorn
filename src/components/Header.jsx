import React, { useState } from 'react'
import { ReactComponent as X } from "../assets/X.svg"
import { Wrapper } from '../styles/HeaderStyle'
import { HeaderData } from '../data/HeaderData'
import { MainHeader } from './HeaderCopmponent/MainHeader'
import { ShopHeader } from './HeaderCopmponent/ShopHeader'
import { AboutHeader } from './HeaderCopmponent/AboutHeader'

export const Header = () => {
    const [open, setOpen] = useState(false)
    const [openAbout, setOpenAbout] = useState(false)
    const [shipping, setShipping] = useState(false)

    function showHeader(index) {
        if (index === 0) {
            setOpen(true)
        }else{
            setOpen(false)
        }
        if (index === 2) {
            setOpenAbout(true)
        }else{
            setOpenAbout(false)
        }
        if (index !== index) {
            setOpen(false)
            setOpenAbout(false)
        }
    }

    return (
        <Wrapper>
            {!shipping ? (
                <div className="shipping_wrapper">
                    <h3>FREE SHIPPiNG ON $30+</h3>
                    <div className="cannel_cnt" onClick={() => setShipping(true)}>
                        <X />
                    </div>
                </div>
            ) : ("")}

            <MainHeader 
                HeaderData={HeaderData} 
                showHeader={showHeader}
            />

            {open ? (             
                <ShopHeader 
                    HeaderData={HeaderData} 
                    setOpen={setOpen} 
                />
            ):("")}

            {openAbout ? (
                <AboutHeader 
                    setOpenAbout={setOpenAbout} 
                />
            ) : ("")}
            
        </Wrapper>
    )
}

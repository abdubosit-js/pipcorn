import React, { Fragment } from 'react'
import { ReactComponent as Logo } from "../../assets/Logo.svg"
import { ReactComponent as Account } from "../../assets/account.svg"
import { ReactComponent as Zoom } from "../../assets/zoom.svg"
import { ReactComponent as Basket } from "../../assets/basket.svg"

export const MainHeader = ({showHeader, HeaderData}) => {
  return (
    <header>
        <div className='burger'>
            <span className='data-burger'></span>
            <span className='data-burger'></span>
            <span className='data-burger'></span>
        </div>

        <Logo />
        
        <nav>
            <ul onMouseLeave={() => showHeader(false)}>
                {HeaderData.navLinks.map((navLink, index) => {
                    return (
                        <Fragment key={navLink.title}>
                            <li onMouseEnter={() => showHeader(index)} >
                                <a href="#" >{navLink.title}</a>
                            </li>
                        </Fragment>
                    )
                })}
            </ul>
        </nav>
        
        <div className='right_bar-flex'>
            <Account />
            <Zoom className='zoom_svg' />
            <Basket />
        </div>
    </header>
  )
}

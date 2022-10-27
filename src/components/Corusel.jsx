import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Corusel = () => {
  return (
    <Werapper>
        <Carousel emulateTouch={true} className='main_carousel'>
            <div>
                <img className='pip' src="//cdn.shopify.com/s/files/1/0162/2468/products/sea-salt-mini-popcorn-popcorn-pipsnacks-llc-453933_large.png?v=1652110676"  alt="" />
            </div>
            <div>
                <img className='pip' src="//cdn.shopify.com/s/files/1/0162/2468/products/sea-salt-mini-popcorn-popcorn-pipsnacks-llc-799876_large.png?v=1652104020"  alt="" />
            </div>
            <div>
                <img className='pip' src="//cdn.shopify.com/s/files/1/0162/2468/products/sea-salt-mini-popcorn-popcorn-pipsnacks-llc-764935_large.png?v=1652530776"  alt="" />
            </div>
        </Carousel>
    </Werapper>
  )
}

const Werapper = styled.div`
    width: 100%;
    margin-top: 130px;
    padding-left: 20%;  
    .carousel-status{
        display: none;
    }
    .control-arrow{
        display: none;
    }
    .control-dots{
        display: none;
    }
    .thumb{
        border: none; 
    }
    .thumbs{
        display: flex;
        align-items: center;
        background-color: #faf8ee;
    }
    .slide{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel .thumb.selected, .carousel .thumb:hover {
        border: 0px solid transparent;
    }
    .carousel-slider{
        max-width: 600px;
        height: 600px;
        padding: 40px 0px;
        background-color: #faf8ee;
    }
    .carousel .slider-wrapper{
        height: 500px;
        background-color: #faf8ee;
    }
    .thumbs-wrapper{
        margin-left: -0px;
        max-width: 250px;
        
    }
    .pip{
        object-fit: contain;
    }
    @media (max-width: 802px) {
        padding-left: 0;
        .carousel-slider{
            max-width: 100%;
            height: 600px;
            padding: 40px 0px;
            background-color: #faf8ee;
        }
    }
`


import React from 'react'
import styled from 'styled-components'
import { Corusel } from '../components/Corusel'
import { Header } from '../components/Header'
import { ShopingCnt } from '../components/ShopingCnt'

export const PipContainer = () => {
    return (
        <Wrapper>
            <Header />
            <div className="flex_containers">
                <Corusel/>
                <ShopingCnt />
                
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: auto;
    border: 1px solid transparent;
    min-height: 100vh;
    position: relative;
    background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"),#F6F3E2;
    .flex_containers{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
    
`

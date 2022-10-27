import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 1920px;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    max-width: 1920px;
    margin: auto;
    ::selection {
        background-color: #953300;
        color: white;
    }
    .shipping_wrapper{
        width: 100%;
        height: 36px;
        padding: 0 20px;
        background-color: #953300;
        display: flex;
        align-items: center;
        h3{
            margin: auto;
            color: white;
        }
        .cannel_cnt {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            cursor: pointer;
            transition: 500ms;
            border-radius: 50%;
            background:  url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #953300;
            svg{
                transition: 300ms;
            }
            :hover {
                background-color: #FFFFFF;
                svg{
                    transform: rotate(90deg);
                    path {
                        fill: #953300;
                    }
                }
            }
        }
    }
    
    header{
        padding: 0 50px;
        min-height: 76px;
        display: flex;
        align-items: center;
        background-color: #f6f3e2;
        justify-content: space-between;
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
        ul{
            display: flex;
            gap: 20px;
            li{
                height: 76px;
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: center;
                a{
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 22px;
                    color: #1C1C1C;
                    text-decoration: none;
                }
            }
        }
        .burger{
            display: none;
        }
    }
    
    .right_bar-flex{
        display: flex;
        align-items: center;
        gap: 20px;
        svg{
            cursor: pointer;
        }
    }
    
    .shop_cnt{
        width: 100%;
        height: 392px;
        transition: 0.5s;
    }
    
    .top_content{
        height: 40%;
        background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #e6d1b4;
        padding: 15px 60px;
    }
    
    .top_content-flex{
        max-width: 1360px;
        display: flex;
        gap: 10px;
        .content{
            width: 100%;
            height: 65px;
            display: flex;
            align-items: center;
            border-radius: 6px;
            cursor: pointer;
            transition: 500ms;
            background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #eeead5;
            h3{
                font-family: 'Itim', cursive;
                font-weight: 400;
                line-height: 10px;
            }
        }
        .content:hover {
            box-shadow: 0px 0px 0px 1px rgb(149, 51, 0);
        }
        span{
            width: 1px;
            height: 55px;
            margin-top: 5px;
            background-color: #953300;
        }
        .box_size{
            padding-left: 10px;
            width: 150%;
            height: 65px;
            display: flex;
            cursor: pointer;
            align-items: center;
            gap: 10px;
            border-radius: 6px;
            background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #eeead5;
            border: 1px solid #953300;
            p{
                font-size: 10px;
                color: gray;
            }
            div{
                width: 80%;
                height: 100%;
                text-align: center;
                font-weight: 1000;
                font-size: 18px;
                font-style: normal;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFFFFF;
                background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #953300;
                font-family: 'Oswald', sans-serif;
                border-radius: 0 6px 6px 0;
            }
        }

    }
    
    .title{
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
        h2{
            color: #953300;
        }
        p{
            color: #1C1C1C;
            font-weight: 600;
        }     
    }
    
    .bottom_content{
        height: 55%;
        background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #eeead5;
        padding: 15px 60px;
        .bottom_cnt{
            width: 100%;
            height: 128px;
            background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #e6d1b4;
            border-radius: 6px;
            display: flex;
            gap: 10px;
            align-items: center;
            transition: 500ms;
            :hover {
                box-shadow: 0px 0px 0px 1px rgb(149, 51, 0);
            }
            img{
                width: 75px;
                object-fit: cover;
            }
            cursor: pointer;
            div{
                max-width: 119px;
                h4{
                    font-family: 'Itim', cursive;
                    font-weight: 500;
                    font-size: 18px;
                }
            }
        }
        b{
            margin-top: 6px;
            width: 1px;
            height: 115px;
            background-color: #953300;
        }
        .shop_all{
            font-family: 'Oswald', sans-serif;
            cursor: pointer;
            width: 35%;
            background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #953300;
            border-radius: 6px;
            color: #FFFFFF;
            font-weight: 900;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    
    .about_cnt{
        width: 100%;
        height: 154px;
        background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #e5d1b3;
        padding: 30px 0;
        .about_content{
            max-width: 1300px;
            height: 100px;
            margin: auto;
            display: flex;
            gap: 20px;
            .cnt_story{
                cursor: pointer;
                border-radius: 6px;
                background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #eeead5;
                width: 100%;
                padding: 10px 25px;
                transition: 500ms;
                :hover{
                    box-shadow: 0px 0px 0px 1px rgb(149, 51, 0);
                }
                h1{
                    color: #953300;
                    font-family: 'Oswald', sans-serif;
                }
                p{
                    margin-top: 6px;
                    color: #1C1C1C;
                    font-family: 'Itim', cursive;
                }
            }
        }
    }

    @media (max-width: 990px) {
        header {
            nav {
                display: none;
            }
            .right_bar-flex{
                .zoom_svg{
                    display: none;
                }
            }
            .burger{
                width: 100px;
                height: 30px;
                display: block;
                transition: .3s linear all;
                .data-burger {
                    height: 2px;
                    display: block;
                    width: 26px;
                    background-color: #953300;
                    margin-bottom: 7px;
                }
            }
        }
    }

`

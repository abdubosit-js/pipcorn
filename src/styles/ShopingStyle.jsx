import styled from 'styled-components'

export const WrapperShoping = styled.div`
    width: 100%;
    padding: 49px 30px;
    margin-top: 80px;
    

    .select_size{
        width: 100%;
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 7px;
        .bags{
            width: 150px;
            height: 40px;
            border: none;
            background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #953300;
            color: white;
            font-family: 'Anton', sans-serif;
            font-size: 15px;
            font-weight: 100;
        }
        button{
            width: 230px;
            height: 40px;      
            font-family: 'Anton', sans-serif;
            border: none;
            cursor: pointer;
            color: #953300;
            font-size: 15px;
            transition: 300ms;
            background-color: transparent;
            border: 1px solid #953300;
            :hover{
                background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #953300;
                color: white;

            }
        }
    }

    .selected_wapper{
        max-width: 584px;
        min-height: 70px;
        border: 1px solid #953300   ;
        margin-top: 15px;
        display: flex;
        padding: 10px;
        flex-direction: column;
        gap: 10px;
        .deliver_week_cnt {
            h3{
                font-family: 'Itim' , sans-serif;
                font-weight: 400;
                font-size: 19px;
                color: #3F3C38;
            }
            select {
                width: 100%;
                max-width: 385px;
                height: 50px;
                outline: none;
                border: none;
                border-bottom: 3px solid #3F3C38;
                background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #f6f3e2;
                font-family: sans-serif;
                font-weight: 600;
                color: #3F3C38;
                font-size: 15px;
                option {
                    font-size: 15px;
                    font-weight: 600;
                    color: #3F3C38;
                }
                margin-bottom: 17 px;
            }
        }
        label::before{
            content: "";
			width: 17px;
			height: 17px;
			border-radius: 50%;
            outline: 1px solid #953300;
			border: 3.5px solid #ece8cc;
			display: block;
            transition: 0.3s;
        }
        input:checked + label::before {
			background-color: #953300;
			border: 3.5px solid #ece8cc;
			outline: 1px solid #953300;
		}
        label{
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 17px;
            text-transform: capitalize;
            color: #3F3C38;
        }
    }
    
    .stars_viewer_wrapper{
        .title_cnt_stars{
            p{
                font-family: 'Anton', sans-serif;
                font-weight: 300;
                font-size: 16px;
                line-height: 16px;
                letter-spacing: 0.13em;
                text-transform: uppercase;
                color: #C59259;
            }
            h1{
                margin-top: 8px;
                font-family: 'Anton', sans-serif;
                font-style: normal;
                font-weight: 100;
                font-size: 50px;
                line-height: 50px;
                color: #3F3C38;
            }
        }   
        .star_options{
            margin-top: 15px;
            gap: 3px;
            display: flex;
            cursor: pointer;
            align-items: center;
            p{
                font-family: 'Itim', cursive;
                font-size: 15px;
                font-weight: 400;
                margin-left: 15px;
                transition: 300ms;
                :hover {
                    color: #426291;
                }
            }
        }
    }
    
    .price_cnt {
        margin-top: 25px;
        h5{
            font-family: 'Anton', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #3F3C38;
        }
        p{
            margin-top: 15px;
            font-style: normal;
            font-weight: 500;
            font-size: 13.5px;
            line-height: 22px;
            text-transform: uppercase;
            color: #2A2A2A;
        }
    } 
    
    .purchase_wrapper{
        display: flex;
        align-items: center;
        margin-top: 15px;
        gap: 7px;
        .counte_cnt{
            width: 125px;
            height: 50px;
            border: 1px solid #953300;
            display: flex;
            align-items: center;
            div{
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                color: #953300;
                font-weight: 600;
                cursor: pointer;
                margin-bottom: 5px;
                user-select: none;
            }
            span{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #3F3C38;
                font-size: 20px;
                font-family: "Anton", sans-serif;
                font-weight: 200;
            }
        }
        button {
            width: 457px;
            height: 50px;   
            background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #953300;
            color: white;
            border: none;
            cursor: pointer;
            font-family: "Anton", sans-serif;
            font-weight: 200;
            font-size: 20px;
            transition: 0.2s;
            :hover {
                background-color: white;
                border: 1px solid #953300;
                color: #953300;
            }
        }
    }
    
    .image_wrapper_flex{
        margin-top: 35px;
        max-width: 584px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .snaks_wrapper{
        margin-top: 35px;
        max-width: 584px;
        h2{
            font-family: "Anton", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 18px;
            color: #3F3C38;
        }
        .snaks_cnt{
            margin: 19px 0;
        }
        .bundle_box{
            width: 100%;
            height: 90px;
            padding: 10px;
            margin-top: 14px;
            display: flex;
            gap: 10px;
            justify-content: space-between;
            align-items: center;
            background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #e5d1b3;
            .text_cnt {
                b{

                    font-style: normal;
                    font-weight: 800;
                    font-size: 14px;
                    line-height: 13px;
                    color: #3F3C38;
                }
                p{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #3F3C38;

                }
            }
            .curncies_cnt{
                display: flex;
                gap: 12px;
                align-items: center;
                img{
                    width: 78px;
                    object-fit: contain;
                }
            }
            button {
                height: 100%;
                border: none;
                background: url("https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/rice-paper.png"), #953300;
                color: white;
                font-size: 15px;
                font-family: "Anton", sans-serif;
                transition: 200ms;
                :hover {
                    background-color: white;
                    border: 1px solid #953300;
                    color: #953300;
                }
            }
            .btn {
                padding: 0 10px;
                height: 45px;
            }
        }
    }

    @media (max-width: 802px) {
        padding: 0 25px;
        margin-top: 20px;
        .selected_wapper{
            max-width: 802px;
        }
        .purchase_wrapper{
            width: 100%;
            .counte_cnt {
                width: 150px;
            }
            button{
                width: 100%;
            }
        }
        .image_wrapper_flex{
            max-width: 802px;
        }
        .snaks_wrapper {
            max-width: 802px;
            button{
                padding: 0 10px;
            }
        }
    }

    @media (max-width: 500px) {
        padding: 10px;
    }
`

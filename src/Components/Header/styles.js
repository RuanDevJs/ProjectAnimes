import styled, { keyframes } from "styled-components";

export const Animate = keyframes`
    from{
        opacity: 0;
        transform: translate3d(0,0,0);
    }
    to{
        opacity: 1;
        transform: translate3d(20px,0,0);
    }
`;

export const DropDown = keyframes`
    from{
        opacity: 0;
        transform: translate3d(0,0,0);
    }
    to{
        opacity: 1;
        transform: translate3d(0, 5px,0);
    }
`;

export const Header =  styled.header`
    padding: 20px;
    background: #ffffff;
    box-shadow: 1px 1px 16px rgba(0,0,0,16%);
    z-index: 1000;
`;

export const Container = styled.div`
    max-width: 960px;
    padding: 5px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .header_menu {
        display: block;
    }

    .button_header {
        font-size: 18px;
        color: #333;
        font-weight: 400;
        cursor: pointer;
        position: relative;
    }

    .button_header:hover {
        color: #353535;
        transition: .3s ease-in;
        cursor: pointer;
    }

    .button_header_exit {
        font-size: 18px;
        color: #333;
        font-weight: 400;
        cursor: pointer;
        animation: ${Animate} 0.5s forwards;
        position: relative;

        ul {
            margin: 5px 0;
            position: absolute;
            width: 140px;
            padding: 5px;
            background: #fff;
            border: 1px solid #f2f2f2;
            transition: 0.3s ease-in;
            animation: ${DropDown} 0.5s forwards;
            z-index: 10000;
        }

        ul > li {
            margin: 12px 0;
            padding: 5px;
        }

        ul > li a{
            font-weight: 400;
            color: #333;
            transition: 0.3s ease-out;
            position: relative;
            z-index: 10000;
        }

        ul > li{
            color: #D92534;
        }
    }

    .button_header_exit:hover {
        color: #353535;
        transition: .3s ease-in;
        cursor: pointer;
    }

`

export const ImageProfile = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;


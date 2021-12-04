import styled, { keyframes } from "styled-components";

const Animate = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0,0,0);
    }
    to {
        opacity: 1;
        transform: translate3d(0,8px,0);
    }
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    jsutify-content: center;
    flex-wrap: wrap;
    background: rgba(0,0,0,16%);
    transition: 0.5s ease-in;
`;

export const Wrap = styled.div`
    width: 760px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    animation: ${Animate} 0.5s forwards;
`;

export const Left = styled.div`
    flex: 2;
    display: flex;

    img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }
`;

export const Right = styled.div`
    flex: 1;
    padding: 25px;
    background: #fff;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`;

export const Image = styled.img`

`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    img {
        width: 45px;
        height: 45px;
        border-radius: 50px;
        background: #fff;
        box-shadow: 0 0 0 2px #f2f2f2;
        padding: 5px;
        margin-right: 12px;
    }

    &::after{
        content: "";
        background: #f2f2f2;
        display: block;
        width: 220px;
        height: 0.5px;
        margin: 12px 0;
    }
`;

export const Title = styled.h2`
    margin-top: 10px;
    font-size: 32px;
    font-weight: 700;
    margin-right: 10px;
    color: #333;
`;

export const Subtitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-top: 8px;
    color: #333;
    line-height: 1.5em;
`;

export const Author = styled.h1`
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    color: #333;
`;

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


export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: #333;
    margin: 50px 0 20px 45px;
`;

export const Container = styled.div`
    max-width: 960px;
    padding: 10px;
    margin: 0 auto;
    display: none;
    justify-content: center;
    align-items: center;
    flwx-direction: column;

    &.active {
        display: flex;
        animation: ${Animate} 0.5s forwards;
    }
`;

export const Wrap = styled.div`
   width: 460px;
   background: #f9f9f9;
   padding: 20px;
   border-top-left-radius: 15px;
   border-top-right-radius: 15px;
`;

export const Table = styled.div`
    padding: 20px 15px;
    transition: 0.3s ease-out;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background: #f2f2f2;
        cursor: pointer;
        transition: 0.3s ease-in;
    }

    input {
        width: 80%;
        border: 0;
        border-bottom: 2px solid #c2c2c2;
        background: none;
    }

    input::placeholder {
        color: #333;
        font-size: 18px;
        font-weight: 400;
    }
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 400;
`;

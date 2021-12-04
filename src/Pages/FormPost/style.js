import styled, { keyframes } from "styled-components";

export const Animate = keyframes`
    from{
        opacity: 0;
        transform: translate3d(0,0,0);
    }
    to{
        opacity: 1;
        transform: translate3d(5px,0,0);
    }
`;


export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    color: #333;
    margin: 50px auto 20px auto;
    max-width: 960px;
`;

export const Container = styled.div`
    max-width: 960px;
    padding: 10px;
    margin: 0 auto;
    display: none;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    &.active {
        display: flex;
        animation: ${Animate} 0.5s forwards;
    }

    button {
        margin: 12px 0;
        width: 460px;
    }
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 460px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin: 8px 0;

    input {
        margin: 4px 0;
        padding: 12px;
        outline: 0;
        width: 80%;
        border: 0;
        border-bottom: 2px solid #c2c2c2;
        font-size: 18px;
        font-weight: 400;
        color: #1f1f1f;
    }

    textarea {
        margin: 4px 0;
        padding: 12px;
        outline: 0;
        width: 80%;
        height: 120px;
        border: 0;
        border-bottom: 2px solid #c2c2c2;
        font-size: 18px;
        font-weight: 400;
        color: #1f1f1f;
    }

`;

export const Label = styled.label`
    font-size: 20px;
    font-weight: 300;
    color: #c2c2c2;
`;

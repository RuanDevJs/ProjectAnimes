import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
    margin: 20px 0;
    display: flex;
    flex-flow: wrap column;
`;

export const Animate = keyframes`
    from{
        opacity: 0;
        transform: translate3d(0,0,0);
    }
    to{
        opacity: 1;
        transform: translate3d(10px,0,0);
    }
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
    justify-content: center;
    align-items: center;

    &.active {
        display: flex;
        animation: ${Animate} 0.5s forwards;
    }
`;

export const Modal = styled.div`
    width: 400px;
    padding: 30px;
    background: #ffffff;
    box-shadow: 1px 1px 16px rgba(0, 0, 0, 16%);
    border-radius: 4px;

    h1 {
        text-align: center;
    }

    span {
        display: block;
        margin: 4px auto;
        font-size: 16px;
        font-weight: 400;
        color: #c2c2c2;
        text-align: center;
    }

    a {
        font-size: 16px;
        font-weight: 500;
        color: #d95829;
        text-align: center;
    }


`;

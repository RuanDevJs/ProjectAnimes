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

export const Container = styled.div`
    max-width: 960px;
    margin: 50px auto;
    display: none;
    justify-content: flex-start;
    align-items: flex-start;

    &.active {
        display: flex;
        animation: ${Animate} 0.5s forwards;
    }

    .posts-img {
        opacity: 0;
    }

    .posts-img.active {
        opacity: 1;
        animation: ${Animate} 0.5s forwards;
    }

    @media(max-width: 728px){
        & {
            max-width: 728px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 230px;
        }
    }
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    label {
        font-size: 16px;
        font-weight: 400;
        color: #333;
        display: flex;
        align-items: center;
        margin-right: 0 12px;
    }
`;

export const ProfilePhoto = styled.img`
    display: block;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`;

export const Right = styled.div`
    flex: 3;
    margin-left: 20px;
`;

export const Title = styled.h1`
    font-size: 45px;
    font-weight: 300;
    margin-right: 10px;
    color: #333;
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
`;

export const Subtitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 12px 0;
    color: #333;

    a {
        font-size: 16px;
        font-weight: 400;
        margin: 12px 0;
        color: #d95829;
    }
`;

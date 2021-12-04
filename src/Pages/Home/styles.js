import styled from "styled-components";

export const Container = styled.div`
    max-width: 960px;
    margin: 50px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    @media(max-width: 728px){
        & {
            justify-content: center;
            align-items: center;
        }
    }
`;

export const Wrap = styled.div`
    img {
        flex: 1 1 300px;
        display: block;
        width: 300px;
        height: 300px;
        border-radius: 4px;
        object-fit: cover;
    }
`;

import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
        width: 100%;
        background-color: #D95829;
        border: 0;
        outline: 0;
        padding: 15px;
        margin: 4px 0;
        font-size: 23px;
        font-weight: 700;
        color: #fcfcfc;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s ease-out;

        &:hover {
            background-color: #E95929;
            transition: 0.3s ease-in ;
        }
`;

export default function Button({children, ...props}) {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

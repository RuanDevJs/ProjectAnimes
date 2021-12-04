import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
        outline: 0;
        padding: 15px;
        border: 2px solid #f2f2f2;
        margin: 4px 0;
        font-size: 16px;
        font-weight: 500;
        color: #333;
        border-radius: 4px;
        transition: 0.5s ease-in;
`;

export default function Input({...props}) {

    return (
        <StyledInput {...props} />
    )
}

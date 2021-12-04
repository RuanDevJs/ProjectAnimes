import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: #333333;
`;

export default function Title({ children }) {
    return <StyledTitle>{children}</StyledTitle>;
}

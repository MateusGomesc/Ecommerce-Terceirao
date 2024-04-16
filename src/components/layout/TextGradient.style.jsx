import styled from "styled-components"

export const Title = styled.h1`
    font-size: ${(props) => props.fontSize}px;
    font-weight: bold;
    background-image: var(--gradient-dark);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`
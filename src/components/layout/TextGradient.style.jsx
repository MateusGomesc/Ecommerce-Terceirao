import styled from "styled-components"

export const Title = styled.h1`
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 'normal'};
    background-image: var(--gradient);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`
import styled from "styled-components"

export const Title = styled.h1`
    font-size: ${(props) => isNaN(props.fontSize) ? props.fontSize : `${props.fontSize}px`};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 'normal'};
    background-image: var(--gradient);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: ${(props) => props.textAlign ? props.textAlign : 'start'};
`
import styled from "styled-components"

export const Banner = styled.img`
    width: calc(100% + 64px);
    border-radius: 0 0 8px 8px;
    margin-top: -40px;
    margin-bottom: 13px;

    @media(min-width: 1024px){
        & {
            display: none;
        }
    }
`
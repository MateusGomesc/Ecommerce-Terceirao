import styled from "styled-components"

export const Banner = styled.img`
    width: calc(100% + 64px);
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 0 0 8px 8px;
    margin-top: -40px;
    margin-bottom: 13px;
    margin-left: -32px;

    @media(min-width: 720px){
        & {
            width: 40%;
            height: 400px;
            border-radius: 28px 56px;
            margin-top: 16px;
            margin-left: 0;
            box-shadow: -2px -2px 16px var(--shadow),
                4px 4px 16px var(--shadow);
        }
    }
`
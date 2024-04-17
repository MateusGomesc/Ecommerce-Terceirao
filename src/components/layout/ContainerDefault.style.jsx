import styled from "styled-components";

export const ContainerDefault = styled.div`
    padding: 32px 32px 32px 32px;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1024px){
        & {
            padding: 32px 96px 32px 96px;
        }
    }
`
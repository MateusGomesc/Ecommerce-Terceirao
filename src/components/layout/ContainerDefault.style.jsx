import styled from "styled-components";

export const ContainerDefault = styled.main`
    padding: 32px 32px 32px 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;

    @media(min-width: 1024px){
        & {
            padding: 32px 96px 32px 96px;
        }
    }
`
import styled, { keyframes } from "styled-components"

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Loader = styled.div`
    border: 12px solid var(--bg-secondary);
    border-top: 12px solid var(--purple-dark);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
`

export default function Loading(){
    return(
        <Container>
            <Loader/>
        </Container>
    )
}
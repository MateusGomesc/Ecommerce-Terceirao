import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import LogoWithText from "../../img/logoWithText.svg"
import { Title } from "./TextGradient.style"


const FooterContainer = styled.footer`
    padding: 8px 32px 8px 32px;
    background-color: var(--bg-primary);
    border-radius: 8px 8px 0 0;
    box-shadow: 0 -4px 12px var(--shadow);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(min-width: 1024px){
        & {
            padding: 8px 96px 8px 96px;
        }
    }
`

const Ancora = styled.a`
    text-decoration: none;
    color: inherit;
`

const Text = styled.p`
    font-size: 10px;
    font-weight: light;

    &:hover{
        text-decoration: underline;
    }
`
const Navigator = styled.nav`
    display: flex;
    gap: 48px;
`



export default function Footer(){

    // Navegação para Termos de uso
    const navigate = useNavigate()
    const handleClick = () => navigate('/termos')

    return(
        <FooterContainer>
            <Ancora href="/"><img src={LogoWithText} alt="Logo terceirão" /></Ancora>
            <Navigator>
                <section>
                    <Title fontSize={12} fontWeight='bold'>Dúvidas</Title>
                    <Ancora onClick={handleClick}><Text>Termos de uso</Text></Ancora>
                </section>
                <section>
                    <Title fontSize={12} fontWeight='bold'>Fale conosco</Title>
                    <Ancora href="https://www.instagram.com/3inf_iftm"><Text>@3inf_iftm</Text></Ancora>
                </section>
            </Navigator>
        </FooterContainer>
    )
}
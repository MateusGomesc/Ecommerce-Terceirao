import styled from "styled-components"

import LogoWithText from "../../img/logoWithText.svg"
import { Title } from "./TextGradient.style"


const FooterContainer = styled.footer`
    padding: 8px 32px 8px 32px;
    background-color: var(--bg-primary);
    border-radius: 8px 8px 0 0;
    box-shadow: 0 -4px 12px var(--shadow);
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    return(
        <FooterContainer>
            <Ancora href="/"><img src={LogoWithText} alt="Logo terceirão" /></Ancora>
            <Navigator>
                <section>
                    <Title fontSize={12}>Dúvidas</Title>
                    <Ancora href=""><Text>Termos de uso</Text></Ancora>
                </section>
                <section>
                    <Title fontSize={12}>Fale conosco</Title>
                    <Ancora href="https://www.instagram.com/3inf_iftm"><Text>@3inf_iftm</Text></Ancora>
                </section>
            </Navigator>
        </FooterContainer>
    )
}
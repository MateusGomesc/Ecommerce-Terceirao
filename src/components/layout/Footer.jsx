import styled from "styled-components"
import { Link } from "react-router-dom"

import LogoWithText from "../../img/logoWithText.svg"
import { Title } from "./Title.style"


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

const LinkStyle = styled(Link)`
    font-size: 10px;
    font-weight: light;
    text-decoration: none;
    color: inherit;

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
            <Link to="/"><img src={LogoWithText} alt="Logo terceirão" /></Link>
            <Navigator>
                <section>
                    <Title fontSize={12} fontWeight='bold'>Dúvidas</Title>
                    <LinkStyle to='/termos'>Termos de uso</LinkStyle>
                </section>
                <section>
                    <Title fontSize={12} fontWeight='bold'>Fale conosco</Title>
                    <LinkStyle to="https://www.instagram.com/3inf_iftm">@3inf_iftm</LinkStyle>
                </section>
            </Navigator>
        </FooterContainer>
    )
}
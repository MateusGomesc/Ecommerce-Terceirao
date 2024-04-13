import styled from 'styled-components'
import ButtonBackground from './ButtonBackground'

import logoNoText from '../../img/logoNoText.svg'


const HeaderContainer = styled.header`
    background-color: var(--bg-primary);
    padding: 8px 32px 8px 32px;
    box-shadow: 0 4px 12px var(--shadow);
    width: 100%;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 1024px){
        & {
            padding: 8px 96px 8px 96px;
        }
    }
`
const Ancora = styled.a`
    text-decoration: none;
`

export default function Header(){
    return(
        <HeaderContainer>
            <Ancora href="/"><img src={logoNoText} alt="Logo Terceirão" /></Ancora>
            <ButtonBackground
                text='User'
            />
        </HeaderContainer>
    )
}
import styled from 'styled-components'
import ButtonBackground from './ButtonBackground'

import logoNoText from '../../img/logoNoText.svg'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'


const HeaderContainer = styled.header`
    background-color: var(--bg-primary);
    padding: 8px 32px 8px 32px;
    box-shadow: 0 4px 12px var(--shadow);
    width: 100%;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    @media(min-width: 1024px){
        & {
            padding: 8px 96px 8px 96px;
        }
    }
`
const LinkStyle = {
    textDecoration: "none"
}

export default function Header(){
    return(
        <HeaderContainer>
            <Link to="/" style={LinkStyle}><img src={logoNoText} alt="Logo Terceirão" /></Link>
            <Dropdown/>
        </HeaderContainer>
    )
}
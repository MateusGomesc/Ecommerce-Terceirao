import styled from 'styled-components'

import User from '../../img/User.png'

const Button = styled.button`
    border-radius: 16px;
    background: var(--gradient);
    color: var(--bg-primary);
    width: auto;
    height: 28px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    padding: 4px 16px 4px 16px;
`

export default function ButtonBackground({ text, type }){
    return(
        <Button type={type}>
            {text === 'User' ? ( <img src={User} alt='Simbolo do usuário'/> ) : text}
        </Button>
    )
}
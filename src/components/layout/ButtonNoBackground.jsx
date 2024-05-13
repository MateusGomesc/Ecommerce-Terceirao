import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Title } from './Title.style'



const Button = styled.button`
    border-radius: 16px;
    background: linear-gradient(white, white) padding-box,
                var(--gradient) border-box;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    width: auto;
    height: 28px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: ${props => props.fontSize ? props.fontSize : 12}px;
    padding: 4px 16px 4px 16px;
    text-decoration: none;
`

const LinkStyled = styled(Link)`
    text-decoration: none;
`

export default function ButtonNoBackground({ text, type, handleClick, path }){

    return(
        <Button 
            onClick={handleClick}
            type={type}
        >
            {
                path ? (<LinkStyled to={path}><Title fontSize='inherit'>{text}</Title></LinkStyled>) : (<Title fontSize='inherit'>{text}</Title>)
            }
        </Button>
    )
}
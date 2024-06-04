import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Title } from './Title.style'



export const Button = styled.button`
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

const Text = styled.h1`
    font-size: ${(props) => isNaN(props.fontSize) ? props.fontSize : `${props.fontSize}px`};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 'normal'};
    background-image: var(--gradient);
    background-clip: text;
    -webkit-text-fill-color: transparent;
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
                path ? (<LinkStyled to={path}><Text fontSize={12}>{text}</Text></LinkStyled>) : (<Title fontSize='inherit'>{text}</Title>)
            }
        </Button>
    )
}
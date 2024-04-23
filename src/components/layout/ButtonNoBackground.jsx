import styled from 'styled-components'

import { Title } from './Title.style'
import { useNavigate } from 'react-router-dom'


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
    font-size: 12px;
    padding: 4px 16px 4px 16px;
`

export default function ButtonNoBackground({ text, path, type }){

    const navigate = useNavigate()
    const handleClick = () => navigate(path)

    return(
        <Button 
            onClick={handleClick}
            type={type}
        >
            <Title fontSize={10}>{text}</Title>
        </Button>
    )
}
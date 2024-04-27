import styled from "styled-components"
import { useState } from "react"
import { Link } from "react-router-dom"

import Personagens from '../../img/personagens.svg'
import { Title } from "./Title.style"
import ButtonNoBackground from "./ButtonNoBackground"

const CardContainer = styled.div`
    box-shadow: -2px -2px 16px var(--shadow),
                4px 4px 16px var(--shadow);
    background-color: var(--bg-primary);
    border-radius: 8px;
    width: 250px;
`
const Image = styled.img`
    border-radius: 8px 8px 0 0;
`

const CardBody = styled.div`
    padding: 15px;
`

const Text = styled.h2`
    font-family: inherit;
    font-weight: 300;
    font-size: 18px;

    &:hover{
        text-decoration: underline;
    }
`

const LinkStyle = {
    textDecoration: "none",
    color: "inherit"
}

const SubTitle = styled.p`
    color: ${(props) => props.color};
    font-size: 12px;
    font-weight: 300;
`

const ButtonContainer = styled.div`
    margin-top: 14px;
    display: flex;
    width: 100%;
    justify-content: space-around;
`


export default function EventCard({ EventName, EventDate, IsAdmin, IsOpen }){
    const [Open, setOpen] = useState(IsOpen)

    const changeStatus = () => Open ? setOpen(false) : setOpen(true)

    return(
        <CardContainer>
            <Image src={Personagens} alt={`Banner ${EventName}`} />
            <CardBody>
                {
                    IsAdmin && (
                        <SubTitle color={Open ? 'var(--success)' : 'var(--error)'}>Evento {Open ? 'aberto' : 'fechado'}</SubTitle>
                    )
                }
                <Title fontSize={14} fontWeight='bold'>{EventDate}</Title>
                <Link 
                    to={ IsAdmin ? '/compras' : '/comprar'}
                    style={LinkStyle}
                >
                    <Text>
                        {EventName}
                    </Text>
                </Link>
                {
                    IsAdmin && (
                        <ButtonContainer>
                            <ButtonNoBackground text={Open ? 'Fechar' : 'Abrir'} handleClick={changeStatus}/>
                            <ButtonNoBackground text='Editar'/>
                        </ButtonContainer>
                    )
                }
            </CardBody>
        </CardContainer>
    )
}
import styled from "styled-components"
import Personagens from '../../img/personagens.svg'
import { Title } from "./TextGradient.style"
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

const Ancora = styled.a`
    text-decoration: none;
    color: inherit;
`

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
    return(
        <CardContainer>
            <Image src={Personagens} alt="Banner do trote de personagens" />
            <CardBody>
                {
                    IsAdmin && (
                        <SubTitle color={IsOpen ? 'var(--success)' : 'var(--error)'}>Evento {IsOpen ? 'aberto' : 'fechado'}</SubTitle>
                    )
                }
                <Title fontSize={14} fontWeight='bold'>{EventDate}</Title>
                <Ancora href="#"><Text>{EventName}</Text></Ancora>
                {
                    IsAdmin && (
                        <ButtonContainer>
                            <ButtonNoBackground text={IsOpen ? 'Fechar' : 'Abrir'}/>
                            <ButtonNoBackground text='Editar'/>
                        </ButtonContainer>
                    )
                }
            </CardBody>
        </CardContainer>
    )
}
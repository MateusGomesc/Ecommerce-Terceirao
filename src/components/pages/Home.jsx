import styled from "styled-components"
import { Title } from "../layout/Title.style"
import EventCard from "../layout/EventCard"

const Text = styled.p`
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 25px;
`

const Regular = styled.span`
    font-weight: normal;
`
const EventCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    margin-top: 25px;
`

export default function Home(){
    return(
        <>
            <Text>Seja bem-vindo (a) ao sistema de vendas do <Regular>TERCEIRÃO INFORMÁTICA 2024</Regular> 👋</Text>
            <Title fontWeight='bold'>Escolha o evento:</Title>
            <EventCardContainer>
                <EventCard 
                    EventName='Trote de personagens'
                    EventDate='11 Abr 2024'
                    IsAdmin={false}
                />
            </EventCardContainer>
        </>
    )
}
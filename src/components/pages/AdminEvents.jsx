import styled from "styled-components";

import ButtonNoBackground from "../layout/ButtonNoBackground";
import { Title } from "../layout/Title.style";
import EventCard from "../layout/EventCard";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 32px;
`
const EventCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    margin-top: 15px;
    margin-bottom: 32px;
`

export default function AdminEvents(){
    return(
        <>
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                Eventos cadastrados:
            </Title>
            <ButtonContainer>
                <ButtonNoBackground 
                    text='Cadastrar'
                    path='/adminRegistarEvento'
                    type='button'
                />
            </ButtonContainer>
            <EventCardContainer>
                <EventCard 
                    EventName='Trote de personagens'
                    EventDate='11 Abr 2024'
                    IsAdmin={true}
                    IsOpen={true}
                />
            </EventCardContainer>
        </>
    )
}
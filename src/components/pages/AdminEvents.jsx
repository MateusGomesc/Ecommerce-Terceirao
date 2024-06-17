import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

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
    const [data, setData] = useState([])

    const getDate = (date) => {
        const month = {
            '01': 'JAN',
            '02': 'FEV',
            '03': 'MAR',
            '04': 'ABR',
            '05': 'MAI',
            '06': 'JUN',
            '07': 'JUL',
            '08': 'AGO',
            '09': 'SET',
            '10': 'OUT',
            '11': 'NOV',
            '12': 'DEZ'
        }

        const array = date.split('-')
        return `${array[2]} ${month[array[1]]} ${array[0]}`
    }
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/events').then((response) => {
            setData(response.data)
        })
    }, [])
    
    return(
        // excluir e imagem
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
                    path='/formulario/cadastro/0'
                    type='button'
                />
            </ButtonContainer>
            <EventCardContainer>
                {
                    data.length === 0 ? 'Nenhum evento encontrado' :
                    data.map((event) => (
                        <EventCard
                            EventId={event.id} 
                            EventName={event.name}
                            EventDate={getDate(event.date)}
                            IsAdmin={true}
                            IsOpen={event.status}
                            EventImage={event.image}
                            EventLocation={event.location}
                        />
                    ))
                }
            </EventCardContainer>
        </>
    )
}
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

import { Title } from "../layout/Title.style"
import EventCard from "../layout/EventCard"
import { Alert } from "../layout/Alert.style"

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
    width: 100%;

    @media(min-width: 1024px){
        justify-content: start;
    }
`


export default function Home(){
    const [data, setData] = useState([])
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [alertType, setAlertType] = useState("error")

    const location = useLocation()

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/events/open').then((response) => {
            setData(response.data)
        })

        if(location.state){
            setAlert(true)
            setAlertMessage(location.state.message)
        }
    }, [])

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

    return(
        <>
            <Text>Seja bem-vindo (a) ao sistema de vendas do <Regular>TERCEIRÃO INFORMÁTICA 2024</Regular> 👋</Text>
            <Title fontWeight='bold' fontSize={24}>Escolha o evento:</Title>
            {
                alert && <Alert type={alertType}>{alertMessage}</Alert>
            }
            <EventCardContainer>
                {
                    data.lenght === 0 ? 'Nenhum evento encontrado' :
                    data.map((event) => (
                        <EventCard 
                            EventId={event.id}
                            EventName={event.name}
                            EventDate={getDate(event.date)}
                            EventLocation={event.location}
                            EventImage={event.image}
                            IsAdmin={false}
                            IsShop={true}
                        />
                    ))
                }
            </EventCardContainer>
        </>
    )
}
import styled from "styled-components";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";

import { Title } from "../layout/Title.style";
import EventCard from "../layout/EventCard";
import Loading from "../layout/Loading";

const Text = styled.p`
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    margin: 20px 0 30px 0;
`

const Bold = styled.span`
    font-weight: bold;
`

const EventCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    margin-top: 15px;
    margin-bottom: 32px;
`

const Container = styled.div`
    width: 100%;
    max-width: 620px;
`


export default function UserEvents(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const acessToken = sessionStorage.getItem('acessToken')
        const decodedToken = jwtDecode(acessToken)
    
        setLoading(true)
        axios.get(process.env.REACT_APP_BASE_URL + '/orders/user/' + decodedToken.id).then((response) => {
            setData(response.data)
        }).finally(() => {
            setLoading(false)
        })

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
        <Container>
            {
                loading && <Loading/>
            }
            <Title
                fontWeight='bold'
                fontSize={24}
                textAlign='center'
            >
                Seus eventos:
            </Title>
            <Text>
                Em caso de pedido de reembolso fale conosco pelo instagram: <Bold>@3inf_iftm</Bold>
            </Text>
            <EventCardContainer>
            {
                !data.length ? 'Nenhuma compra encontrada' :
                data?.map((eventOrder) => (
                    <EventCard
                        EventId={eventOrder.event.id} 
                        EventName={eventOrder.event.name}
                        EventDate={getDate(eventOrder.event.date)}
                        EventImage={eventOrder.event.image}
                        EventLocation={eventOrder.event.location}
                        OrderId={eventOrder.order.id}
                        IsAdmin={false}
                        IsShop={false}
                    />
                ))
            }
            </EventCardContainer>
        </Container>
    )
}
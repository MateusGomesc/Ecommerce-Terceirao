import styled from "styled-components";

import { Title } from "../layout/Title.style";
import EventCard from "../layout/EventCard";

const Text = styled.p`
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    margin: 9px 0;
`

const Bold = styled.span`
    font-weight: bold;
`

export default function UserEvents(){
    return(
        <>
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                Seus eventos:
            </Title>
            <Text>
                Em caso de pedido de reembolso fale conosco pelo instagram: <Bold>@3inf_iftm</Bold>
            </Text>
            <EventCard
                EventName='Trote de personagens'
                EventDate='11 Abr 2024'
                IsShop={false}
            />
        </>
    )
}
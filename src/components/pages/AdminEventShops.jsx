import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { Title } from '../layout/Title.style'
import Table from '../layout/Table'
import { Banner } from '../layout/Banner.style'


const LinkStyled = styled(Link)`
    text-decoration: underline;
    cursor: pointer;
    color: inherit;
`

const Separator = styled.div`
    height: 20px;
    width: 100%;
`

export default function AdminEventShops(){
    const { id } = useParams()
    const [dataEvent, setDataEvent] = useState({})
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/events/' + id).then((response) => {
            setDataEvent(response.data)

            axios.get(process.env.REACT_APP_BASE_URL + '/orders/event/' + id).then((response) => {
                const data = response.data

                const tableData = data.map((order) => [
                    order.username,
                    (<LinkStyled key={order.userId} to={'/detalhes/' + id + '/' + order.userId}>Detalhes</LinkStyled>)
                ])

                setTableData(tableData)
            })
        })
    }, [])

    return(
        <>
            <Banner src={process.env.REACT_APP_BASE_URL + '/' + dataEvent?.event?.image} alt='Banner Trote de personagens'/>
            <Title fontSize={24}>{dataEvent?.event?.name}</Title>
            <Separator/>
            <Title fontSize={20} fontWeight='bold'>Compras realizadas:</Title>
            <Table
                head={['Comprador', 'Detalhes']}
                data={tableData}
            />
        </>
    )
}
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { Title } from '../layout/Title.style'
import Table from '../layout/Table'
import { Banner } from '../layout/Banner.style'
import Checkbox from '../forms/Checkbox'
import Loading from '../layout/Loading'


const LinkStyled = styled(Link)`
    text-decoration: underline;
    cursor: pointer;
    color: inherit;
`

const Separator = styled.div`
    height: 20px;
    width: 100%;
`

const Container = styled.div`
    width: 100%;
    max-width: 620px;
`

const Flex = styled.div`
    @media(min-width: 720px){
        & {
            margin-top: 32px;
            display: flex;
            gap: 48px;
            max-width: 100%;
        }
    }
`

export default function AdminEventShops(){
    const { id } = useParams()
    const [dataEvent, setDataEvent] = useState({})
    const [tableData, setTableData] = useState([])
    const [loading, setLoading] = useState(false)

    const updateStatusOrder = (id) => {
        axios.put(process.env.REACT_APP_BASE_URL + '/orders/check/' + id).then(() => {
            window.location.reload()
        })
    }

    useEffect(() => {
        setLoading(true)
        axios.get(process.env.REACT_APP_BASE_URL + '/events/' + id).then((response) => {
            setDataEvent(response.data)

            axios.get(process.env.REACT_APP_BASE_URL + '/orders/event/' + id).then((response) => {
                const data = response.data
                
                if(data.error){
                    setTableData([[(<Checkbox/>) ,'Ainda não há compras', '*']])
                }
                else{
                    const tableData = data.map((order) => [
                        (<Checkbox 
                            handleOnClick={() => updateStatusOrder(order.id)}
                            checked={order.received}
                            id={order.id}
                        />),
                        order.username,
                        (<LinkStyled key={order.userId} to={'/detalhes/' + id + '/' + order.userId}>Detalhes</LinkStyled>)
                    ])
    
                    setTableData(tableData)
                }
            })
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return(
        <Flex>
            {
                loading && <Loading/>
            }
            <Banner src={dataEvent?.event?.image} alt={`Banner ${dataEvent?.event?.name}`}/>
            <Container>
                <Title fontSize={24} textAlign='center'>{dataEvent?.event?.name}</Title>
                <Separator/>
                <Title fontSize={20} fontWeight='bold'  textAlign='center'>Compras realizadas:</Title>
                <Table
                    head={['Status' ,'Comprador', 'Detalhes']}
                    data={tableData}
                />
            </Container>
        </Flex>
    )
}
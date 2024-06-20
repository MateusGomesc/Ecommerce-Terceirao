import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatPrice } from "../../hooks/useFormatPrice";

import Table from "../layout/Table";
import { Title } from "../layout/Title.style";

const Information = styled.p`
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    text-align: start;
    margin-top: 10px;
`

const Image = styled.img`
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
`

const Container = styled.div`
    width: 100%;
    max-width: 620px;
`

export default function AdminShop(){
    const { eventId, userId } = useParams()
    const [order, setOrder] = useState({})

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/orders/event/' + eventId).then((response) => {
            const data = response.data

            const userOrder = data.filter((order) => order.userId === parseInt(userId))
            const productsId = userOrder[0].items.map((item) => item.ProductId)

            axios.post(process.env.REACT_APP_BASE_URL + '/products/', { ids: productsId }).then((response) => {
                let tableData = []
                tableData = response.data.map((product, index) => [product, userOrder[0].items[index].quantity])

                setOrder({
                    username: userOrder[0].username,
                    price: userOrder[0].price,
                    proof: userOrder[0].proof,
                    tableData: tableData,
                    payMethod: userOrder[0].payMethod
                })
            })
            
        })
    }, [])

    return(
        <Container>
            <Title
                fontWeight='bold'
                fontSize={24}
                textAlign='center'
            >
                {order?.username}
            </Title>
            {<Table 
                head={['Produto', 'Quantidade']}
                data={order?.tableData}
            />}
            <Information>Total: {formatPrice(order?.price)}</Information>
            <Information>Método de pagamento: {order?.payMethod}</Information>
            {
                order?.proof && <Image src={process.env.REACT_APP_BASE_URL + '/' + order?.proof} alt={'Comprovante de pagamento' + order?.username}/>
            }
        </Container>
    )
}
import styled from "styled-components";
import { formatPrice } from "../../hooks/useFormatPrice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Banner } from "../layout/Banner.style";
import { Title } from '../layout/Title.style'
import Table from "../layout/Table";
import Loading from "../layout/Loading";

const Text = styled.p`
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    margin: 20px 0 0 0;
`

const Price = styled.p`
    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    width: 100%;
    text-align: end;
    padding: 8px 20px;
`

const PayMethod = styled.p`
    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    text-align: start;
    width: 100%;
`

const Container = styled.div`
    width: 100%;
    max-width: 620px;
`

export default function EventResume(){
    const [dataOrder, setDataOrder] = useState({})
    const [dataEvent, setDataEvent] = useState({})
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { EventId, OrderId } = useParams()


    useEffect(() => {
        setLoading(true)
        axios.get(process.env.REACT_APP_BASE_URL + '/orders/' + OrderId).then((response) => {
            if(!response.data.error){
                setDataOrder(response.data)

                const ProductsId = response.data.items.map((item) => item.ProductId)
                const ProductsQuantity = response.data.items.map((item) => item.quantity)

                axios.post(process.env.REACT_APP_BASE_URL + '/products', { ids: ProductsId }).then((response) => {
                    let array = response.data
                    let mergedArray = array.map((item, index) => [item, ProductsQuantity[index]])
                    setProducts(mergedArray)
                })
            }
        })

        axios.get(process.env.REACT_APP_BASE_URL + '/events/' + EventId).then((response) => {
            setDataEvent(response.data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return(
        <>
            {
                loading && <Loading/>
            }
            <Banner src={dataEvent?.event?.image} alt={'Banner ' + dataEvent?.event?.name}/>
            <Container>
                <Title
                    fontWeight='bold'
                    fontSize={24}
                    textAlign='center'
                >
                    {dataEvent?.event?.name}
                </Title>
                <Text>Compra finalizada!</Text>
                <Text>Resumo da sua compra:</Text>
                <Table
                    head={['Produto', 'Quantidade']}
                    data={products}
                />
                <Price>Total: {formatPrice(dataOrder?.order?.price ? dataOrder?.order?.price : 0)}</Price>
                <PayMethod>Método de pagamento: {dataOrder?.order?.payMethod}</PayMethod>
                {
                    dataOrder?.order?.payMethod === 'Dinheiro' && <Text>Realize o pagamento em dinheiro na entrega do produto</Text>
                }
            </Container>
        </>
    )
}
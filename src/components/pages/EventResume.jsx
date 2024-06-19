import styled from "styled-components";
import { formatPrice } from "../../hooks/useFormatPrice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Banner } from "../layout/Banner.style";
import Personagens from '../../img/personagens.svg'
import { Title } from '../layout/Title.style'
import Table from "../layout/Table";

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

export default function EventResume(){
    const [dataOrder, setDataOrder] = useState({})
    const [dataEvent, setDataEvent] = useState({})
    const [products, setProducts] = useState([])
    const { EventId, OrderId } = useParams()


    useEffect(() => {
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
        })
    }, [])

    return(
        <>
            <Banner src={process.env.REACT_APP_BASE_URL + '/' + dataEvent?.event?.image?.replace(/\\/g, '/')} alt={'Banner' + dataEvent?.event?.name}/>
            <Title
                fontWeight='bold'
                fontSize={24}
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
        </>
    )
}
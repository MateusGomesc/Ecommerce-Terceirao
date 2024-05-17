import styled from "styled-components";

import { Banner } from "../layout/Banner.style";
import Personagens from '../../img/personagens.svg'
import { Title } from '../layout/Title.style'
import Table from "../layout/Table";
import { useEffect, useState } from "react";
import { formatPrice } from "../../hooks/useFormatPrice";

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
    const cartData = JSON.parse(localStorage.getItem('cart'))

    return(
        <>
            <Banner src={Personagens} alt="Banner do Trote de Personagens"/>
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                Trote de personagens:
            </Title>
            <Text>Compra finalizada!</Text>
            <Text>Resumo da sua compra:</Text>
            <Table
                head={['Produto', 'Quantidade']}
                data={Object.entries(cartData.products)}
            />
            <Price>Total: {formatPrice(cartData.price)}</Price>
            <PayMethod>Método de pagamento: {cartData.payMethod}</PayMethod>
        </>
    )
}
import styled from "styled-components"

import { Banner } from "../layout/Banner.style"
import Personagens from '../../img/personagens.svg'
import { Title } from "../layout/Title.style"
import InputFile from "../forms/InputFile"
import ButtonNoBackground from "../layout/ButtonNoBackground"
import QRcode from '../../img/qrcode.svg'
import { useState } from "react"
import { formatPrice } from "../../hooks/useFormatPrice"

const Text = styled.p`
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    margin: 8px 0 20px 0;
`

const CopyPastPay = styled.h3`
    font-family: inherit;
    font-weight: 400;
    width: 100%;
    text-align: justify;
    word-wrap: break-word;
    margin: 20px 0 8px 0;
    cursor: pointer;
`

const Price = styled.p`
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    text-align: center;
`

const Bold = styled.span`
    background: var(--gradient);
    background-clip: text;
    color: transparent;
`

const SubText = styled.p`
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${props => props.color};
`

const ButtonContainer = styled.div`
    width: 100%;
    text-align: center;
`

export default function EventPay(){
    const [copy, setCopy] = useState(false)
    const cartData = JSON.parse(localStorage.getItem('cart'))

    const handleCopy = () => {
        navigator.clipboard.writeText(process.env.REACT_APP_LINK_PIX)
        .then(() => setCopy(true))
        .catch(() => setCopy(false))
    }

    return(
        <>
            <Banner src={Personagens} alt="Banner Trote de personagens"/>
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                Trote de personagens:
            </Title>
            <Text>Faça o pagamento via <Bold>pix copia e cola</Bold> ou pelo <Bold>qrcode</Bold> e anexe o comprovante no botão abaixo:</Text>
            <Price>Total: {formatPrice(cartData.price)}</Price>
            <img src={QRcode} alt="QRcode para pagamento"/>
            <CopyPastPay id="copy" onClick={handleCopy}>{process.env.REACT_APP_LINK_PIX}</CopyPastPay>
            <SubText
                color={copy ? 'var(--success)' : 'inherit'}
            >
                {copy ? 'Texto copiado!' : 'Clique para copiar o texto!'}
            </SubText>
            <form method="get" action="/resumo">
                <InputFile/>
                <ButtonContainer>
                    <ButtonNoBackground 
                        text='Avançar'
                        type='submit'
                    />
                </ButtonContainer>
            </form>
        </>
    )
}
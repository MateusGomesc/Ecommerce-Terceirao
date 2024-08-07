import styled from "styled-components"
import { useEffect, useState } from "react"
import { formatPrice } from "../../hooks/useFormatPrice"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { Banner } from "../layout/Banner.style"
import { Title } from "../layout/Title.style"
import InputFile from "../forms/InputFile"
import ButtonNoBackground from "../layout/ButtonNoBackground"
import QRcode from '../../img/qrcode.svg'
import Loading from "../layout/Loading"

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

const Container = styled.div`
    width: 100%;
    max-width: 620px;
    text-align: center;
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

export default function EventPay(){
    const [copy, setCopy] = useState(false)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const cartData = JSON.parse(localStorage.getItem('cart'))
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        axios.get(process.env.REACT_APP_BASE_URL + '/events/' + cartData.event).then((response) => {
            setData(response.data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const handleCopy = () => {
        navigator.clipboard.writeText(process.env.REACT_APP_LINK_PIX)
        .then(() => setCopy(true))
        .catch(() => setCopy(false))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('user', cartData.user)
        formData.append('event', cartData.event)
        formData.append('price', cartData.price)
        formData.append('payMethod', cartData.payMethod)
        formData.append('terms', cartData.terms)
        formData.append('products', JSON.stringify(cartData.products))
        console.log(formData)

        setLoading(true)
        axios.post(process.env.REACT_APP_BASE_URL + '/orders/pix', formData).then((response) => {
            if(!response.data.error){
                localStorage.removeItem('cart')
                navigate('/resumo/' + cartData.event + '/' + response.data.id)
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    return(
        <Flex>
            {
                loading && <Loading/>
            }
            <Banner src={data?.event?.image} alt={'Banner' + data?.event?.name}/>
            <Container>
                <Title
                    fontWeight='bold'
                    fontSize={24}
                    textAlign='center'
                >
                    {data?.event?.name}
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
                <a href="https://wa.me/5534999232850?text=Nome:%20%0ATurma:%20%0AEnvie%20juntamente%20com%20o%20comprovante" target="_blanck">Clique aqui para enviar o comprovante no WhatsApp</a>
                <form onSubmit={handleSubmit}>
                    <ButtonContainer>
                        <ButtonNoBackground 
                            text='Avançar'
                            type='submit'
                        />
                    </ButtonContainer>
                </form>
            </Container>
        </Flex>
    )
}
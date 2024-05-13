import styled from "styled-components"
import { useEffect, useState } from "react"
import { formatPrice } from "../../hooks/useFormatPrice"

import Plus from '../../img/Plus.svg'
import Minus from '../../img/Minus.svg'

const CountContainer = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const Number = styled.p`
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
`

export default function Count({ product, productPrice }){
    const [number, setNumber] = useState(0)

    const Increment = () => {
        if(number < process.env.REACT_APP_PRODUCT_LIMIT){
            setNumber(number+1)
            updatePrice(true)
        }
    }

    const Decrement = () => {
        if(number > 0){
            setNumber(number-1)
            updatePrice(false)
        }
    }

    const updatePrice = (isIncrement) => {
        // Recebe json do local storage
        const cartData = JSON.parse(localStorage.getItem('cart'))

        // Atualiza o preço no json
        isIncrement ? cartData.price += productPrice : cartData.price -= productPrice

        // Atualiza preço no dom
        document.getElementById('price').innerHTML = `Total: ${formatPrice(cartData.price)}`

        // Envia dados atualizados
        localStorage.setItem('cart', JSON.stringify(cartData))
    }

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'))
        cartData.products[product] = number
        localStorage.setItem('cart', JSON.stringify(cartData))
    }, [number])

    return(
        <CountContainer>
            <Image src={Plus} alt="Símbolo de adição" onClick={Increment}/>
            <Number>{number}</Number>
            <Image src={Minus} alt="Símbolo de decrementação" onClick={Decrement}/>
        </CountContainer>
    )
}
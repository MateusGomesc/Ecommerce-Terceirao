import styled from "styled-components"
import { useState } from "react"

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

export default function Count({}){
    const [number, setNumber] = useState(0)

    const Increment = () => {
        setNumber(number+1)
    }
    const Decrement = () => {
        setNumber(number > 0 ? number-1 : 0)
    }

    return(
        <CountContainer>
            <Image src={Plus} alt="Símbolo de adição" onClick={Increment}/>
            <Number>{number}</Number>
            <Image src={Minus} alt="Símbolo de decrementação" onClick={Decrement}/>
        </CountContainer>
    )
}
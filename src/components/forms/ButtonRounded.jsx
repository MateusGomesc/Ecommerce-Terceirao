import styled from "styled-components"

import Plus from '../../img/Plus.svg'
import Minus from '../../img/Minus.svg'

const ButtonContainer = styled.button`
    background: linear-gradient(white, white) padding-box,
                var(--gradient) border-box;
    border: 1px solid transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
`

const Text = styled.p`
    font-family: inherit;
    font-size: 12px;
    font-weight: 300;
`

const Image = styled.img`
    width: 28px;
    height: 28px;
`

export default function ButtonRounded({ type, text, handleOnClick}){
    return(
        <Container>
            <ButtonContainer
                onClick={handleOnClick}
                type='button'
            >
                {
                    type === 'plus' ? (<Image src={Plus} alt="Botão de adição"/>) : (<Image src={Minus} alt="Botão de subtração"/>)
                }
            </ButtonContainer>
            <Text>{text}</Text>
        </Container>
    )
}
import styled from 'styled-components'

import { Title } from '../layout/TextGradient.style'
import { ContainerDefault } from '../layout/ContainerDefault.style'

const List = styled.ul`
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    margin-top: 24px;

    & > li{
        text-align: justify;
    }
`

export default function Terms(){
    return(
        <ContainerDefault>
            <Title>Termos de uso:</Title>
            <List>
                <li>Os pagamentos podem ser feitos através do método Pix ou em dinheiro no momento da entrega dos produtos.</li>
                <li>Para pagamentos via Pix, o cliente deve seguir as instruções fornecidas durante o processo de checkout.</li>
                <li>Para pagamentos em dinheiro, o cliente deve ter o valor exato disponível no momento da entrega dos produtos. Não aceitamos cheques.</li>
            </List>
        </ContainerDefault>
    )
}
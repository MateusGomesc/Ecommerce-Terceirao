import styled from "styled-components";

import Table from "../layout/Table";
import { Title } from "../layout/Title.style";
import Comprovante from '../../img/comprovante-exemplo.jpg'

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
`

export default function AdminShop(){
    return(
        <>
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                Mateus Gomes Costa
            </Title>
            <Table 
                head={['Produto', 'Quantidade']}
                data={[
                    ['Brigadeiro', 2],
                    ['Geladinho', 5],
                    ['Palha Italiana', 1]
                ]}
            />
            <Information>Total: R$33,00</Information>
            <Information>Método de pagamento: PIX</Information>
            <Image src={Comprovante} alt='Comprovante de pagamento pix'/>
        </>
    )
}
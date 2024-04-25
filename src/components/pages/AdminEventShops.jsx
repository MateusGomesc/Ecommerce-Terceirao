import styled from 'styled-components'

import Personagens from '../../img/personagens.svg'
import { Title } from '../layout/Title.style'
import Table from '../layout/Table'

const Image = styled.img`
    width: calc(100% + 64px);
    border-radius: 0 0 8px 8px;
    margin-top: -40px;
    margin-bottom: 13px;

    @media(min-width: 1024px){
        & {
            display: none;
        }
    }
`

const Ancora = styled.a`
    text-decoration: none;
    text-decoration: underline;
    cursor: pointer;
`

export default function AdminEventShops(){
    return(
        <>
            <Image src={Personagens} alt='Banner Trote de personagens'/>
            <Title fontSize={24}>Trote de personagens</Title>
            <Title fontSize={20} fontWeight='bold'>Compras realizadas:</Title>
            <Table
                head={['Comprador', 'Detalhes']}
                data={[
                    ['Mateus Gomes Costa', (<Ancora>Detalhes</Ancora>)],
                    ['João da Silva', (<Ancora>Detalhes</Ancora>)]
                ]}
            />
        </>
    )
}
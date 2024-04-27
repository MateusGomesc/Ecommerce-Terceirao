import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Personagens from '../../img/personagens.svg'
import { Title } from '../layout/Title.style'
import Table from '../layout/TableTwoColumns'

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

const LinkStyle = {
    textDecoration: "underline",
    cursor: "pointer",
    color: "inherit"
}

export default function AdminEventShops(){
    return(
        <>
            <Image src={Personagens} alt='Banner Trote de personagens'/>
            <Title fontSize={24}>Trote de personagens</Title>
            <Title fontSize={20} fontWeight='bold'>Compras realizadas:</Title>
            <Table
                head={['Comprador', 'Detalhes']}
                data={[
                    ['Mateus Gomes Costa', (<Link to='/detalhes' style={LinkStyle}>Detalhes</Link>)],
                    ['João da Silva', (<Link to='/detalhes' style={LinkStyle}>Detalhes</Link>)]
                ]}
            />
        </>
    )
}

/*Trocar Ancoras por links do react */
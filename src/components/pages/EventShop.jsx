import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Banner } from "../layout/Banner.style";
import Personagens from '../../img/personagens.svg'
import { Title } from "../layout/Title.style";
import Table from "../layout/Table";
import Count from "../layout/Count";
import Select from "../forms/Select";
import Checkbox from "../forms/Checkbox";
import { Form } from "../forms/Form.style";
import ButtonNoBackground from "../layout/ButtonNoBackground";

const Price = styled.p`
    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    width: 100%;
    text-align: end;
    padding: 8px 20px;
`

const TermsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
`

const Text = styled.p`
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    text-align: justify;
    width: 90%;
    gap: 8px;
`

const LinkStyled = styled(Link)`
    background: var(--gradient);
    background-clip: text;
    text-decoration: underline;
    text-transform: uppercase;
    text-decoration: none;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`


export default function EventShop(){
    const [checkbox, setCheckbox] = useState('unchecked')

    // Modelo do objeto do carrinho
    let cartModel = {
        products: {},
        payMethod: '',
        price: 0,
        terms: '',
        proof: ''
    }

    useEffect(() => {
        // Cria carrinho ao iniciar pagina
        localStorage.setItem('cart', JSON.stringify(cartModel))
    }, [])

    const updateLocalStorage = () => {
        // Recebe json do carrinho atual
        let cartData = JSON.parse(localStorage.getItem('cart'))

        // Atualiza valores no json
        cartData.payMethod = document.getElementById('payMethod').value
        cartData.terms = checkbox

        // Envia valores atualizados
        localStorage.setItem('cart', JSON.stringify(cartData))
    }

    const handleClickCheckbox = () => {
        setCheckbox(checkbox === 'checked' ? 'unchecked' : 'checked')
    }

    const navigate = useNavigate()

    const handleOnSubmit = () => {

        if(document.getElementById('payMethod').value === 'PIX'){
            navigate('/pagamento')
        }
        else{
            navigate('/resumo')
        }
    }

    return(
        <>
            <Banner 
                src={Personagens}
                alt="Banner Trote de personagens"
            />
            <Form 
                onSubmit={handleOnSubmit}
            >
                <Title
                    fontWeight='bold'
                    fontSize={24}
                >
                    Trote de personagens:
                </Title>
                <Table
                    head={['Produto', 'Preço', 'Quantidade']}
                    data={[
                        ['Brigadeiro', 'R$2,00', (<Count product='Brigadeiro' productPrice={2}/>)],
                        ['Geladinho', 'R$5,00', (<Count product='Geladinho' productPrice={5}/>)]
                    ]}
                />
                <Price id='price'>Total: R$ 0,00</Price>
                <Select
                    name='payMethod'
                    label='Método de pagamento'
                    options={['Método de pagamento', 'Dinheiro', 'PIX']}
                />
                <TermsContainer>
                    <Checkbox handleOnChange={handleClickCheckbox}/>
                    <Text>TERMOS DE USO - Você precisa aceitar os sequintes termos de uso uso para efetuar a compra: <LinkStyled to='/termos'>CLIQUE AQUI</LinkStyled></Text>
                </TermsContainer>
                <Center>
                    <ButtonNoBackground 
                        text='Comprar'
                        type='submit'
                        fontSize={16}
                        handleClick={updateLocalStorage}
                    />
                </Center>
            </Form>
        </>
    )
}
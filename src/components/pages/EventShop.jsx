import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { formatPrice } from "../../hooks/useFormatPrice";

import { Banner } from "../layout/Banner.style";
import { Title } from "../layout/Title.style";
import Table from "../layout/Table";
import Count from "../layout/Count";
import Checkbox from "../forms/Checkbox";
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

const SelectContainer = styled.select`
    background: linear-gradient(white, white) padding-box,
                var(--gradient) border-box;
    border: 1px solid transparent;
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    padding: 8px 10px 8px 10px;
    outline: none;
    margin: 20px 0;

    &:hover{
        outline: none;
    }
`


export default function EventShop(){
    const [checkbox, setCheckbox] = useState('unchecked')
    const [data, setData] = useState({})
    const [products, setProducts] = useState([])
    const { id } = useParams()

    // Modelo do objeto do carrinho
    let cartModel = {
        products: {},
        payMethod: '',
        price: 0,
        terms: '',
        proof: '',
        user: '',
        event: '',
    }

    useEffect(() => {
        const acessToken = sessionStorage.getItem('acessToken')

        if(acessToken){
            const decodedToken = jwtDecode(acessToken)
            cartModel.user = decodedToken.id
            cartModel.event = parseInt(id)
        }

        axios.get(process.env.REACT_APP_BASE_URL + '/events/' + id).then((response) => {
            setData(response.data)

            if (response.data && response.data.products) {
                const newProducts = response.data.products.map((product) => [
                    product.name,
                    formatPrice(product.price),
                    (<Count key={product.name} product={product.name} productPrice={product.price} productId={product.id} />)
                ]);

                setProducts(newProducts);
            }
        })

        // Cria carrinho ao iniciar pagina
        localStorage.setItem('cart', JSON.stringify(cartModel))
    }, [id])

    const navigate = useNavigate()
    
    const updateLocalStorage = () => {
        const acessToken = sessionStorage.getItem('acessToken')

        if(acessToken){
            // Recebe json do carrinho atual
            let cartData = JSON.parse(localStorage.getItem('cart'))
    
            // Atualiza valores no json
            cartData.payMethod = document.getElementById('payMethod').value
            cartData.terms = checkbox
    
            // Envia valores atualizados
            localStorage.setItem('cart', JSON.stringify(cartData))
        }
        else{
            navigate('/login')
        }
    }

    const handleClickCheckbox = () => {
        setCheckbox(checkbox === 'checked' ? 'unchecked' : 'checked')
    }


    const handleOnSubmit = (event) => {
        event.preventDefault()
        const acessToken = sessionStorage.getItem('acessToken')
        const cartData = JSON.parse(localStorage.getItem('cart'))

        if(!cartData.price){
            return 1
        }
        else if(!acessToken){
            navigate('/login')
        }
        else if(document.getElementById('payMethod').value === 'PIX'){
            navigate('/pagamento')
        }
        else{
            cartData.products = JSON.stringify(cartData.products)

            axios.post(process.env.REACT_APP_BASE_URL + '/orders/cash', cartData).then((response) => {
                if(!response.data.error){
                    localStorage.removeItem('cart')
                    navigate('/resumo/' + cartData.event + '/' + response.data.id)
                }
            })
        }
    }

    return(
        <>
            <Banner 
                src={process.env.REACT_APP_BASE_URL + '/' + data?.event?.image?.replace(/\\/g, '/')}
                alt={'Banner ' + data?.event?.name}
            />
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                {data?.event?.name}
            </Title>
            <Table
                head={['Produto', 'Preço', 'Quantidade']}
                data={products}
            />
            <Price id='price'>Total: R$ 0,00</Price>
            <form onSubmit={handleOnSubmit} width='100%'>
                <SelectContainer
                    name='payMethod'
                    id='payMethod'
                >
                    <option value="" disabled defaultChecked>Método de pagamento</option>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="PIX">PIX</option>
                </SelectContainer>
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
            </form>
        </>
    )
}
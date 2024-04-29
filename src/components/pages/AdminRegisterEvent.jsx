import { useState } from "react";
import styled from "styled-components";

import { Form } from "../forms/Form.style";
import Input from "../forms/Input";
import { Title } from "../layout/Title.style";
import ButtonRounded from "../forms/ButtonRounded";
import Select from "../forms/Select";
import ButtonBackground from "../layout/ButtonBackground";

const ProductArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-top: 25px;
`

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 25px 0;
`

const Text = styled.p`
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
`

export default function AdminRegisterEvent(){
    const [productsNumber, setProductsNumber] = useState(0)

    return(
        <>
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                Cadastro de eventos:
            </Title>
            <Form>
                <InputArea>
                    <Input 
                        label='Nome do evento'
                        placeholder='Digite o nome do evento'
                        type='text'
                        name='EventName'
                    />
                    <Input 
                        label='Data'
                        type='date'
                        name='EventDate'
                    />
                </InputArea>
                <ButtonRounded
                    type='plus'
                    text='Adicionar Produto'
                    handleOnClick={() => setProductsNumber(productsNumber+1)}
                />
                <ButtonRounded
                    type='minus'
                    text='Remover Produto'
                    handleOnClick={() => productsNumber !== 0 && setProductsNumber(productsNumber-1)}
                />
                {
                    Array.from({ length: productsNumber }).map((_, index) => (
                        <ProductArea>
                            <Text>Produto {index+1}:</Text>
                            <Input 
                                label='Nome do produto'
                                placeholder='Digite o nome do produto'
                                type='text'
                                name='ProductName'
                            />
                            <Input 
                                label='Preço do produto'
                                placeholder='Digite o preço do produto'
                                type='number'
                                name='ProductPrice'
                            />
                        </ProductArea>
                    ))
                }
                <Select
                    label='Status'
                    options={['Aberto', 'Fechado']}
                />
                <ButtonBackground 
                    text='Cadastar'
                    type='Submit'
                />
            </Form>
        </>
    )
}
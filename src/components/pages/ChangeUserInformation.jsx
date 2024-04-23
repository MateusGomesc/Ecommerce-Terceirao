import styled from "styled-components";

import { Form } from "../forms/Form.style";
import { InputContainer } from "../forms/FormContainer.style";
import Input from "../forms/Input";
import ButtonBackground from "../layout/ButtonBackground";
import { Title } from "../layout/Title.style";

const Text = styled.p`
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 25px;
    margin-top: 28px;
`

const Regular = styled.span`
    font-weight: normal;
`

export default function ChangeUserInformation(){
    return(
        <>
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                Suas informações:
            </Title>
            <Form action="">
                <InputContainer>
                    <Input 
                        type='text'
                        name='name'
                        label='Nome completo'
                        value='Mateus Gomes Costa'
                    />
                    <Input 
                        type='email'
                        name='email'
                        label='Email'
                        value='mateuscostagomes000@gmail.com'
                    />
                    <ButtonBackground 
                            text='Salvar'
                            type='submit'
                    />
                </InputContainer>
            </Form>
            <Text>Em caso de mudança de senha fale conosco pelo instagram: <Regular>@3inf_iftm</Regular></Text>
        </>
    )
}
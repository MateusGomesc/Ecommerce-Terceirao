import styled from "styled-components";

import Input from "../forms/Input";
import ButtonBackground from "../layout/ButtonBackground";
import { Title } from "../layout/Title.style";
import { Form } from "../forms/Form.style";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    margin-top: 25px;
    gap: 25px;
`

export default function Register(){
    return(
        <>
            <Title
                fontSize={24}
                fontWeight='bold'
            >
                Cadastre-se:
            </Title>
            <Form action="">
                <InputContainer>
                    <Input 
                        type='text'
                        name='name'
                        label='Nome completo'
                        placeholder='Digite seu nome completo'
                    />
                    <Input 
                        type='email'
                        name='email'
                        label='Email'
                        placeholder='Digite seu email'
                    />
                    <Input 
                        type='password'
                        name='password'
                        label='Senha'
                        placeholder='Digite sua senha'
                    />
                    <Input 
                        type='password'
                        name='password'
                        label='Confirme sua senha'
                        placeholder='Confirme sua senha'
                    />
                    <ButtonBackground 
                        text='Cadastrar'
                    />
                </InputContainer>
            </Form>
        </>
    )
}
import styled from "styled-components"

import LogoWithText from "../../img/logoWithText.svg"
import ButtonBackground from "../layout/ButtonBackground"
import ButtonNoBackground from "../layout/ButtonNoBackground"
import Input from "../forms/Input"
import { Form } from "../forms/Form.style"

const Container = styled.div`
    box-shadow: -2px -2px 16px var(--shadow),
                4px 4px 16px var(--shadow);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 12px 10px 24px 10px;
    gap: 8px;
    height: 100%;

    @media(min-width: 1024px){
        & {
            gap: 60px;
            padding: 40px 10px 40px 10px;
        }
    }
`

const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media(min-width: 1024px){
        & {
            width: 48%;
        }
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    gap: 8px;
`

const Image = styled.img`
    height: 48%;
    width: 48%;

    @media(min-width: 1024px){
        &{
            height: 256px;
            width: 256px;
        }
    }
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;
    margin-bottom: 18px;
`

export default function Login(){
    return(
        <>
            <Container>
                <Image src={LogoWithText} alt="" />
                <Form action="">
                    <ContainerRight>
                        <InputContainer>
                            <Input 
                                type='email'
                                name='email'
                                placeholder='Digite seu email'
                                label='Email'
                            />
                            <Input 
                                type='password'
                                name='password'
                                placeholder='Digite sua senha'
                                label='Senha'
                            />
                        </InputContainer>
                        <ButtonContainer>
                            <ButtonBackground text='Entrar' type='submit'/>
                            <ButtonNoBackground 
                                text='Registrar-se' 
                                path='/registrar'
                                type='button'
                            />
                        </ButtonContainer>
                    </ContainerRight>
                </Form>
            </Container>
        </>
    )
}
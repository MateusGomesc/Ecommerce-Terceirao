import styled from "styled-components"
import axios from "axios"
import { Formik, Form} from 'formik'
import * as Yup from 'yup'

import LogoWithText from "../../img/logoWithText.svg"
import ButtonBackground from "../layout/ButtonBackground"
import ButtonNoBackground from "../layout/ButtonNoBackground"
import Input from "../forms/Input"

const Container = styled.div`
    box-shadow: -2px -2px 16px var(--shadow),
                4px 4px 16px var(--shadow);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

    & div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & div img{
        height: 48%;
        width: 48%;

        @media(min-width: 1024px){
            &{
                height: 256px;
                width: 256px;
            }
        }
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    gap: 8px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;
    margin-bottom: 18px;
`

const FormStyled = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export default function Login(){

    // Configure Formik

    const validationSchema = Yup.object({
        email: Yup.string().email().required('Campo obrigatório'),
        password: Yup.string().min(8, 'Sua senha deve conter no mínimo 8 caracteres').max(16, 'Sua senha pode ter no máximo 16 caracteres').required()
    })

    const initialValues = {
        email: '',
        password: ''
    }

    const handleLogin = (values, { setSubmitting }) => {
        axios.post('http://localhost:3001/auth/login', values).then((response) => {
            console.log(response)
        })
        setSubmitting(false)
    }

    return(
        <>
            <Container>
                <div>
                    <img src={LogoWithText} alt="Logo terceirão Informática" />
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {
                        ({ isSubmitting, errors, touched }) => (
                            <FormStyled>
                                <Input 
                                    type="email"
                                    name="email"
                                    label="Email:"
                                    placeholder="Digite seu email"
                                />
                                <Input 
                                    type="password"
                                    name="password"
                                    label="Senha:"
                                    placeholder="Digite sua senha"
                                />
                                <ButtonContainer>
                                    <ButtonNoBackground 
                                        text="Registrar"
                                        path='/registrar'
                                        type="Button"
                                    />
                                    <ButtonBackground 
                                        text='Entrar'
                                        type='submit'
                                    />
                                </ButtonContainer>
                            </FormStyled>
                        )
                    }
                </Formik>
            </Container>
        </>
    )
}
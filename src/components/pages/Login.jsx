import styled from "styled-components"
import axios from "axios"
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import LogoWithText from "../../img/logoWithText.svg"
import ButtonBackground from "../layout/ButtonBackground"
import ButtonNoBackground from "../layout/ButtonNoBackground"
import Input from "../forms/Input"
import { Alert } from "../layout/Alert.style"
import Loading from "../layout/Loading"

const Container = styled.div`
    box-shadow: -2px -2px 16px var(--shadow),
                4px 4px 16px var(--shadow);
    width: 100%;
    max-width: 620px;
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
`

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img{
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
    gap: 8px;
    margin-top: 8px;
`

const FormStyled = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export default function Login(){

    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [alertType, setAlertType] = useState("error")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(location.state){
            setAlertMessage(location.state.message)
            setAlert(true)
            setAlertType('success')
        }
    }, [])

    // Configure Formik

    const validationSchema = Yup.object({
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        password: Yup.string().min(8, 'Sua senha deve conter no mínimo 8 caracteres').max(16, 'Sua senha pode ter no máximo 16 caracteres').required('Campo obrigatório')
    })

    const initialValues = {
        email: '',
        password: ''
    }

    const handleLogin = (values, { setSubmitting }) => {
        setLoading(true)
        axios.post(process.env.REACT_APP_BASE_URL + "/auth/login", values).then((response) => {
            if(response.data.error){
                setAlert(true)
                setAlertMessage(response.data.error)
            }
            else{
                sessionStorage.setItem('acessToken', response.data)
                navigate('/')
            }
        }).finally(() => {
            setLoading(false)
        })

        setSubmitting(false)
    }

    return(
        <>
            {
                loading && <Loading/>
            }
            <Container>
                <ImageContainer>
                    <img src={LogoWithText} alt="Logo terceirão Informática" />
                </ImageContainer>
                {
                    alert && <Alert type={alertType}>{alertMessage}</Alert>
                }
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
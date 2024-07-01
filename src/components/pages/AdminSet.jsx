import styled from "styled-components"
import axios from "axios"
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import { useState } from "react"

import Input from "../forms/Input"
import ButtonBackground from "../layout/ButtonBackground"
import { Title } from "../layout/Title.style"
import { Alert } from "../layout/Alert.style"
import Loading from "../layout/Loading"

const FormStyled = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 25px;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 8px;
`

const Container = styled.div`
    width: 100%;
    max-width: 620px;
`

export default function AdminSet(){
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [alertType, setAlertType] = useState("error")
    const [loading, setLoading] = useState(false)

    // Configure Formik

    const validationSchema = Yup.object({
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        password: Yup.string().min(8, 'Sua senha deve conter no mínimo 8 caracteres').max(16, 'Sua senha pode ter no máximo 16 caracteres').required('Campo obrigatório')
    })

    const initialValues = {
        email: '',
        password: ''
    }

    const handleAdmin = (values, { setSubmitting }) => {
        const acessToken = sessionStorage.getItem('acessToken')
        
        setLoading(true)
        try{
            axios.post(process.env.REACT_APP_BASE_URL + '/auth/setAdmin', { ...values, acessToken}).then((response) => {
                setAlert(true)
                
                if(response.data.error){
                    setAlertMessage(response.data.error)
                    setAlertType('error')
                }
                else{
                    setAlertMessage(response.data)
                    setAlertType('success')
                }
            })
        }
        finally{
            setLoading(false)
        }

        setSubmitting(false)
    }

    return(
        <Container>
            {
                loading && <Loading/>
            }
            <Title
                fontWeight='bold'
                fontSize={24}
                textAlign='center'
            >
                Cadastrar Administrador:
            </Title>
            {
                alert && <Alert type={alertType}>{alertMessage}</Alert>
            }
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleAdmin}
            >
                {
                    ({ isSubmitting, errors, touched }) => (
                        <FormStyled>
                            <Input 
                                type="email"
                                name="email"
                                label="Email do novo administrador:"
                                placeholder="Digite seu email"
                            />
                            <Input 
                                type="password"
                                name="password"
                                label="Sua Senha:"
                                placeholder="Digite sua senha"
                            />
                            <ButtonContainer>
                                <ButtonBackground 
                                    text='Salvar'
                                    type='submit'
                                />
                            </ButtonContainer>
                        </FormStyled>
                    )
                }
            </Formik>
        </Container>
    )
}
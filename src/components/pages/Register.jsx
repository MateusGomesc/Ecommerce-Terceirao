import { Formik, Form } from "formik";
import * as Yup from 'yup'
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Input from "../forms/Input";
import ButtonBackground from "../layout/ButtonBackground";
import { Title } from "../layout/Title.style";
import { Alert } from "../layout/Alert.style";

const FormStyled = styled(Form)`
    width: 100%;
    max-width: 620px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`


export default function Register(){

    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const navigate = useNavigate()

    // Formik configure

    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        password: Yup.string().min(8, 'Sua senha deve conter no mínimo 8 caracteres').max(16, 'Sua senha pode ter no máximo 16 caracteres').required('Campo obrigatório'),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas não conferem').required('Campo obrigatório')
    })

    const handleRegister = (values, { isSubmitting }) => {
        const data = {
            name: values.name,
            email: values.email,
            password: values.password
        }

        axios.post(process.env.REACT_APP_BASE_URL + "/auth", data).then((response) => {
            if(response.data.error){
                setAlert(true)
                setAlertMessage(response.data.error)
            }
            else{
                navigate('/login', { state: { message: response.data } })
            }
        })
        isSubmitting(false)
    }

    return(
        <>
            <Title
                fontSize={24}
                fontWeight='bold'
            >
                Cadastre-se:
            </Title>
            {
                alert && <Alert>{alertMessage}</Alert>
            }
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
            >
                {
                    ({ isSubmitting, errors, touched }) => (
                        <FormStyled>
                            <Input 
                                type="text"
                                name="name"
                                label="Nome completo:"
                                placeholder="Digite seu nome completo"
                            />
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
                            <Input 
                                type="password"
                                name="passwordConfirmation"
                                label="Confirme sua senha:"
                                placeholder="Confirme sua senha"
                            />
                            <div>
                                <ButtonBackground
                                    text='Registar'
                                    type='submit'
                                />
                            </div>
                        </FormStyled>
                    )
                }
            </Formik>
        </>
    )
}
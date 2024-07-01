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
import Loading from "../layout/Loading";

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
    const [loading, setLoading] = useState(false)

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

        setLoading(true)
        try{
            axios.post(process.env.REACT_APP_BASE_URL + "/auth", data).then((response) => {
                if(response.data.error){
                    setAlert(true)
                    setAlertMessage(response.data.error)
                }
                else{
                    navigate('/login', { state: { message: response.data } })
                }
            })
        }
        finally{
            setLoading(false)
        }

        isSubmitting(false)
    }

    return(
        <>
            {
                loading && <Loading/>
            }
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
                                    text='Registrar'
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
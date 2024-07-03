import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from 'yup'
import axios from "axios";

import Input from "../forms/Input";
import { Title } from "../layout/Title.style";
import ButtonRounded from "../forms/ButtonRounded";
import Select from "../forms/Select";
import ButtonBackground from "../layout/ButtonBackground";
import InputFile from '../forms/InputFile'
import { Alert } from '../layout/Alert.style'
import Loading from "../layout/Loading";

const ProductArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 600px;
`

const Text = styled.p`
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
`

const FormStyled = styled(Form)`
    width: 100%;
    max-width: 620px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 25px;
`

export default function AdminRegisterEvent(){
    const { type, id } = useParams()
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [alertType, setAlertType] = useState("error")
    const [loading, setLoading] = useState(false)

    // Formik configure

    let initialValues = {
        name: '',
        date: '',
        image: '',
        location: '',
        products: []
    }

    const [data, setData] = useState(initialValues)

    const validationSchema = Yup.object({
        name: Yup.string().required('Campo obrigatório'),
        date: Yup.date().min(new Date(), 'Data do evento precisa ser futura').required('Campo obrigatório'),
        products: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required('Campo obrigatório'),
                price: Yup.number().positive('Preço deve ser um número positivo').required('Campo obrigatório')
            })
        ),
        image: Yup.mixed().required('Campo obrigatório'),
        location: Yup.string().required('Campo obrigatório')
    })

    const handleSubmit = (values, { isSubmitting, resetForm }) => {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('date', values.date)
        formData.append('products', JSON.stringify(values.products))
        formData.append('image', values.image)
        formData.append('status', values.status)
        formData.append('location', values.location)

        setLoading(true)
        try{
            axios.post(process.env.REACT_APP_BASE_URL + '/events/register', formData).then((response) => {
                setAlert(true)
                setAlertMessage(response.data)
                
                if(response.status === 200){
                    setAlertType('success')
                    resetForm()
                    window.scrollBy({
                        top: -window.scrollY,
                        left: 0,
                        behavior: 'smooth'
                    });
                      
                }
            })
        }
        finally{
            setLoading(false)
        }

        isSubmitting(false)
    }

    const handleUpdate = (values, { isSubmitting, resetForm }) => {
        console.log(values.products)
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('date', values.date)
        formData.append('products', JSON.stringify(values.products))
        formData.append('image', values.image)
        formData.append('status', values.status)
        formData.append('location', values.location)

        setLoading(true)
        try{
            axios.patch(process.env.REACT_APP_BASE_URL + '/events/modify/' + id, formData).then((response) => {
                setAlert(true)
                setAlertMessage(response.data)
                
                if(response.status === 200){
                    setAlertType('success')
                    resetForm()
                    window.scrollBy({
                        top: -window.scrollY,
                        left: 0,
                        behavior: 'smooth'
                    });                  
                }
            })
        }
        finally{
            setLoading(false)
            isSubmitting(false)
        }
    }

    useEffect(() => {
        if(type === 'editar'){
            setLoading(true)
            axios.get(process.env.REACT_APP_BASE_URL + '/events/' + id).then((response) => {
                let data = response.data
                setData({
                    id: data.event.id,
                    name: data.event.name,
                    location: data.event.location,
                    image: data.event.image,
                    date: data.event.date,
                    status: data.event.status === 0 ? 'Fechado' : 'Aberto',
                    products: data.products
                })
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [])

    return(
        <>
            {
                loading && <Loading/>
            }
            <Title
                fontWeight='bold'
                fontSize={24}
            >
                {type === 'cadastro' ? 'Cadastro' : 'Modificação'} de eventos:
            </Title>
            {
                alert && (
                    <Alert
                        type={alertType}
                    >
                        {alertMessage}
                    </Alert>
                )
            }
            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={type === 'cadastro' ? handleSubmit : handleUpdate}
            >
                {({ isSubmitting, errors, touched, values, setFieldValue, resetForm }) => (
                    <FormStyled encType="multipart/form-data">
                        <Input 
                            type="text"
                            name="name"
                            label="Nome do evento:"
                            placeholder="Digite o nome do evento"
                        />
                        <Input 
                            type="date"
                            name="date"
                            label="Data do evento:"
                        />
                        <Input 
                            type="text"
                            name="location"
                            label="Local do evento:"
                            placeholder="Digite o local do evento"
                        />
                        <ButtonRounded
                            type='plus'
                            text='Adicionar Produto'
                            handleOnClick={() => setFieldValue('products', [...values.products, { name: '', price: '' }])}
                        />
                        <ButtonRounded
                            type='minus'
                            text='Remover Produto'
                            handleOnClick={() => {
                                if(type === 'editar'){
                                    setAlert(true)
                                    setAlertMessage('Não é possível diminuir produtos na edição')
                                    setAlertType('error')
                                }
                                else{
                                    setFieldValue('products', values.products.slice(0, -1))
                                }
                            }}
                        />
                        <FieldArray name="products">
                            {() => (
                                <>
                                    {values.products.map((product, index) => (
                                        <ProductArea key={index}>
                                            <Text>Produto {index + 1}:</Text>
                                            <Input 
                                                label='Nome do produto:'
                                                placeholder='Digite o nome do produto'
                                                type='text'
                                                name={`products[${index}].name`}
                                            />
                                            <Input 
                                                label='Preço do produto'
                                                placeholder='Digite o preço do produto'
                                                type='number'
                                                name={`products[${index}].price`}
                                            />
                                        </ProductArea>
                                    ))}
                                </>
                            )}
                        </FieldArray>
                        <Select
                            label='Status'
                            options={['Selecione o status', 'Fechado', 'Aberto']}
                            name='status'
                        />
                        <InputFile 
                            name='image'
                            text='Banner do evento'
                            handleOnChange={(event) => {
                                setFieldValue('image', event.target.files[0])
                            }} 
                        />
                        <div>
                            <ButtonBackground 
                                text={type === 'cadastro' ? 'Cadastrar' : 'Salvar'}
                                type='submit'
                            />
                        </div>
                        
                    </FormStyled>
                )}
            </Formik>
        </>
    )
}
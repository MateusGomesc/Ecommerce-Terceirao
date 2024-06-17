import styled from "styled-components"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Personagens from '../../img/personagens.svg'
import { Title } from "./Title.style"
import ButtonNoBackground from "./ButtonNoBackground"
import { Alert } from "./Alert.style"
import Modal from "./Modal"

const CardContainer = styled.div`
    box-shadow: -2px -2px 16px var(--shadow),
                4px 4px 16px var(--shadow);
    background-color: var(--bg-primary);
    border-radius: 8px;
    width: 250px;
`

const Info = styled.div`
    display: flex;
    margin: 5px 0;
    width: 100%;
    gap: 8px;
    align-items: center;
`

const Image = styled.img`
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 120px;
    object-fit: cover;
    object-position: top;
`

const CardBody = styled.div`
    padding: 8px 15px 15px 10px;
`

const Text = styled.h2`
    font-family: inherit;
    font-weight: 300;
    font-size: 18px;

    &:hover{
        text-decoration: underline;
    }
`

const LinkStyle = {
    textDecoration: "none",
    color: "inherit"
}

const SubTitle = styled.p`
    color: ${(props) => props.color};
    font-size: 12px;
    font-weight: 300;
`

const ButtonContainer = styled.div`
    margin-top: 14px;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
    justify-content: start;
`


export default function EventCard({ EventId, EventName, EventDate, EventImage, EventLocation, IsAdmin, IsOpen, IsShop=true }){
    const [Open, setOpen] = useState(IsOpen)
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [alertType, setAlertType] = useState("error")
    const [showModal, setShowModal] = useState(false)

    const changeStatus = () => {
        const data = {
            status: Open ? 0 : 1
        }

        axios.patch(process.env.REACT_APP_BASE_URL + '/events/status/' + EventId, data).then((response) => {
            if(response.data.error){
                setTimeout(() => {
                    setAlert(true)
                }, 5000)
                setAlertMessage(response.data.error)
            }
            else{
                setOpen(!Open)
            }
        })
    }

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const deleteEvent = () => {
        axios.delete(process.env.REACT_APP_BASE_URL + '/events/delete/' + EventId).then((response) => {
            if(response.data.error){
                setAlertMessage(response.data.error)
                setAlert(true)
            }
            else{
                window.location.reload()
            }

            setShowModal(false)
        })
    }

    return(
        <CardContainer>
            <Image src={process.env.REACT_APP_BASE_URL + '/' + EventImage.replace(/\\/g, '/')} alt={`Banner ${EventName}`} />
            {
                alert && <Alert type={alertType}>{alertMessage}</Alert>
            }
            <CardBody>
                {
                    IsAdmin && (
                        <SubTitle color={Open ? 'var(--success)' : 'var(--error)'}>Evento {Open ? 'aberto' : 'fechado'}</SubTitle>
                    )
                }
                <Info>
                    <Title fontSize={14} fontWeight='bold'>{EventDate}</Title>
                    <SubTitle>{EventLocation}</SubTitle>
                </Info>
                <Link 
                    to={ IsAdmin ? '/compras/' + EventId : IsShop ? '/comprar/' + EventId : '/resumo/' + EventId}
                    style={LinkStyle}
                >
                    <Text>
                        {EventName}
                    </Text>
                </Link>
                {
                    IsAdmin && (
                        <ButtonContainer>
                            <ButtonNoBackground 
                                text={Open ? 'Fechar' : 'Abrir'} 
                                handleClick={changeStatus}
                            />
                            <ButtonNoBackground 
                                text='Editar'
                                path={'/formulario/editar/' + EventId}
                            />
                            <ButtonNoBackground 
                                text='Excluir'
                                handleClick={toggleModal}
                            />
                        </ButtonContainer>
                    )
                }
                <Modal show={showModal} onClose={toggleModal} title='Deletar Evento' handleClick={deleteEvent}>
                    Você realmente quer excluir esse evento?
                </Modal>
            </CardBody>
        </CardContainer>
    )
}
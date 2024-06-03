import styled from "styled-components"
import { Field, ErrorMessage } from "formik"
import { useState } from "react"

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Label = styled.label`
    font-size: 12px;
    font-family: inherit;
    width: 100%;
`
const InputBox = styled.input`
    border-radius: 8px;
    background: linear-gradient(white, white) padding-box,
                var(--gradient) border-box;
    border: 1px solid transparent;
    padding: 8px 10px 8px 10px;
    outline: none;
    width: 100%;
`

const ErrorStyled = styled.span`
    color: var(--error);
    font-size: 12px;
    text-align: start;
    width: 100%;
`

const Checkbox = styled.input`
    cursor: pointer;
`

const CheckboxContainer = styled.div`
    gap: 8px;
    margin-top: 4px;
    width: 100%;
    display: flex;

    & p{
        font-size: 12px;
    }
`


export default function Input({ name, type="", label, placeholder, ...props }){

    const [typeInput, setTypeInput] = useState(type)
    const handlePassword = () => {
        typeInput === "password" ? setTypeInput("text") : setTypeInput("password")
    }

    return(
            <InputContainer>
                <Label>{label}</Label>
                <Field name={name} type={typeInput} placeholder={placeholder} as={InputBox} required {...props}/>
                <ErrorMessage name={name} component={ErrorStyled} />
                {type === 'password' && (
                    <CheckboxContainer>
                        <p>Mostrar senha</p>
                        <Checkbox type="checkbox" onChange={handlePassword}/>
                    </CheckboxContainer>
                )}
            </InputContainer>
    )
}
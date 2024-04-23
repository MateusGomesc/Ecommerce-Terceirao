import styled from "styled-components"
import { useState } from "react"

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Label = styled.label`
    font-size: 12px;
    font-family: inherit;
`
const InputBox = styled.input`
    border-radius: 8px;
    background: linear-gradient(white, white) padding-box,
                var(--gradient) border-box;
    border: 1px solid transparent;
    padding: 8px 10px 8px 10px;
    outline: none;
`

const Checkbox = styled.input`
    cursor: pointer;

    &::after{
        background-color: var(--bg-primary);
    }
`

const CheckboxContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 4px;
`


export default function Input({ label, placeholder, type, handleOnChange, value, name }){
    const [typeInput, setypeInput] = useState(type)

    const handleClick = () => typeInput === 'password' ? setypeInput('text') : setypeInput('password')

    return(
        <InputContainer>
            <Label htmlFor={name}>{label}:</Label>
            <InputBox
                placeholder={placeholder}
                id={name}
                name={name}
                value={value}
                type={typeInput}
                onChange={handleOnChange}
                required
            />
            {
                type === 'password' && (
                    <CheckboxContainer>
                        <Checkbox type='checkbox' id='showPassword' onClick={handleClick}/>
                        <Label htmlFor='showPassword'>Mostrar senha</Label>
                    </CheckboxContainer>
                )
            }
        </InputContainer>
    )
}
import styled from "styled-components"

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


export default function Input({ label, placeholder, type, handleOnChange, value, name }){
    return(
        <InputContainer>
            <Label htmlFor={name}>{label}:</Label>
            <InputBox
                placeholder={placeholder}
                id={name}
                name={name}
                value={value}
                type={type}
                onChange={handleOnChange}
                required
            />
        </InputContainer>
    )
}
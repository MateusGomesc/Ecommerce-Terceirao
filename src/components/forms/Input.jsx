import styled from "styled-components"
import { Field, ErrorMessage } from "formik"

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Label = styled.label`
    font-size: 12px;
    font-family: inherit;
    width: ${props => props.width ? props.width : "100%"};
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

    &::after{
        background-color: var(--bg-primary);
    }
`

const CheckboxContainer = styled.div`
    gap: 8px;
    margin-top: 4px;
    width: 100%;
`


export default function Input({ name, type="", label, placeholder, ...props }){

    return(
            <InputContainer>
                <Label>{label}</Label>
                <Field name={name} type={type} placeholder={placeholder} as={InputBox} required {...props}/>
                <ErrorMessage name={name} component={ErrorStyled} />
            </InputContainer>
    )
}
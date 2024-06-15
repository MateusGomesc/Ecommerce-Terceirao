import styled from "styled-components"
import { Field, ErrorMessage } from 'formik'

const SelectContainer = styled.select`
    background: linear-gradient(white, white) padding-box,
                var(--gradient) border-box;
    border: 1px solid transparent;
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    padding: 8px 10px 8px 10px;
    outline: none;

    &:hover{
        outline: none;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px 0;
    width: 100%;
    max-width: 600px;
`

const Label = styled.label`
    font-family: inherit;
    font-size: 12px;
`

export default function Select({ name, label, options }){
    return(
        <Container>
            <Label htmlFor={name}>{label}:</Label>
            <Field as={SelectContainer} name={name} id={name} required>
                {
                    options.map((item, index) => index === 0 ? <option value='' disabled selected>{item}</option> : <option value={item}>{item}</option>)
                }
            </Field>
        </Container>
    )
}
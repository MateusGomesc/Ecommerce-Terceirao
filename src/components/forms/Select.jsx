import styled from "styled-components"

const SelectContainer = styled.select`
    background: linear-gradient(white, white) padding-box,
                var(--gradient) border-box;
    border: 1px solid transparent;
    width: 100%;
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
`

const Label = styled.label`
    font-family: inherit;
    font-size: 12px;
`

export default function Select({ name, label, options }){
    return(
        <Container>
            <Label>{label}:</Label>
            <SelectContainer name={name}>
                {
                    options.map((item) => <option value={item}>{item}</option>)
                }
            </SelectContainer>
        </Container>
    )
}
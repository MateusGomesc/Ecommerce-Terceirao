import styled from "styled-components"
import { useState } from "react"

const Label = styled.label`
    padding: 4px 16px 4px 16px;
    border-radius: 16px;
    background: var(--gradient);
    color: var(--bg-primary);
    width: auto;
    height: 28px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    padding: 4px 16px 4px 16px;
`

const Input = styled.input`
    display: none;
`

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
`

const FileName = styled.span`
    font-family: inherit;
    font-size: 14px;
`

export default function InputFile({ name, handleOnChange, text }){
    const [fileName, setFileName] = useState('')

    const getFileName = (e) => {
        if(e.target.files && e.target.files['0']){
            setFileName(e.target.files['0'].name)
        }
    }

    const handleChange = (e) => {
        getFileName(e)
        try{
            handleOnChange(e)
        }
        catch{}
    }

    return(
        <Container>
            <Label htmlFor={name}>{text}</Label>
            <Input type="file" accept="image/*" id={name} onChange={handleChange} required></Input>
            <FileName>{fileName}</FileName>
        </Container>
    )
}
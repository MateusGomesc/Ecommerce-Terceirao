import styled from "styled-components"
import { useState } from "react"

import Button from '../layout/ButtonNoBackground'
import { Title } from "../layout/Title.style"

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

export default function InputFile(){
    const [fileName, setFileName] = useState('')

    const getFileName = (e) => {
        if(e.target.files && e.target.files['0']){
            setFileName(e.target.files['0'].name)
        }
    }

    return(
        <Container>
            <Label htmlFor="proof">Anexar Comprovante</Label>
            <Input type="file" accept="image/*" id="proof" onChange={getFileName} required></Input>
            <FileName>{fileName}</FileName>
        </Container>
    )
}
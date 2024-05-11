import styled from "styled-components"

const Check = styled.input`
    -webkit-appearance: none;
    background: linear-gradient(white, white) padding-box,
                    var(--gradient) border-box;
    border: 1px solid transparent;
    width: 24px;
    height: 24px;
    border-radius: 8px;
    cursor: pointer;

    &:checked::before{
        content: '✔';
        display: flex;
        justify-content: center;
        font-size: 14px;
        color: var(--purple-dark);
        border-radius: 8px;
        background: linear-gradient(white, white) padding-box,
                    var(--gradient) border-box;
        outline: 0;
    }
`

export default function Checkbox(){
    return(
        <Check type="checkbox" required></Check>
    )
}
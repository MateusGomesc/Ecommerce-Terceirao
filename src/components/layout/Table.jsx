import styled from "styled-components"

const TableContainer = styled.table`
    border: 1px solid transparent;
    background: linear-gradient(white, white) padding-box,
                var(--gradient) border-box;
    font-size: 14px;
    border-radius: 8px;
    font-family: inherit;
    width: 100%;
    margin-top: 25px;
    

    & th{
        text-align: start;
        font-family: inherit;
        font-weight: 400;
        padding: 10px;
    }

    & thead{
        border-bottom: 1px solid transparent;
        background: linear-gradient(white, white) padding-box,
                    var(--gradient) border-box;
    }
`

export default function Table({ head, data }){
    return(
        <TableContainer>
            <thead>
                <tr>
                    {
                        head.map((text) => (<th>{text}</th>))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((array) => (
                        <tr>
                            {console.log(array)}
                            <th>{array[0]}</th>
                            <th>{array[1]}</th>
                        </tr>
                    ))
                }
            </tbody>
        </TableContainer>
    )
}
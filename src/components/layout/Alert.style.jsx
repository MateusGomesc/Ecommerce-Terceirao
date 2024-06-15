import styled from "styled-components";

export const Alert = styled.span`
    width: 100%;
    border: 1px solid ${props => props.type === 'error' ? '#f5c6cb' : '#C1E2B3'};
    font-size: 12px;
    border-radius: 8px;
    padding: 8px;
    background-color: ${props => props.type === 'error' ? '#f8d7da' : '#DFF0D8'};
    color: ${props => props.type === 'error' ? '#eb3749' : '#4F8A10'};
    margin: 8px 0;
`
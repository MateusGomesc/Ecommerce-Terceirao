// Dropdown.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import User from '../../img/User.png'

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
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

    & img{
      filter: invert(100%);
    }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 120%;
  left: -200%;
  background-color: #f9f9f9;
  border-radius: 8px;
  list-style: none;
  padding: 8px;
  margin: 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 160px;
`;

const DropdownItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ccc;
  font-size: 12px;

  &:last-child {
    border-bottom: none;
  }

  & a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(['Minhas compras', '/seusEventos'])
  const [acessToken, setAcessToken] = useState(sessionStorage.getItem('acessToken'))
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const acessToken = sessionStorage.getItem('acessToken')

    if(acessToken){
        const decodedtoken = jwtDecode(acessToken)
        
        if(!decodedtoken){
            navigate('/login')
        }
        else if(decodedtoken.isAdmin){
            setOptions([
                ['Minhas compras', '/seusEventos'],
                ['Painel de controle', '/admin']
            ])
        }
        else{
            setOptions([
                ['Minhas compras', '/seusEventos'],
            ])
        }
    }
    else{
      setOptions([
        ['Login', '/login']
      ])
    }

  }, [acessToken, navigate])

  const exit = () => {
    sessionStorage.removeItem('acessToken')
    navigate('/login')
    setIsOpen(false)
    setOptions([])
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}><img src={User} alt='Icone de usuário' /></DropdownButton>
      <DropdownMenu open={isOpen}>
        {
            options.map((option) => (
                <DropdownItem><a href={option[1]}>{option[0]}</a></DropdownItem>
            ))
        }
        {
            options.length !== 0 && options.length !== 1 && <DropdownItem onClick={exit}><a>Sair</a></DropdownItem>
        }
      </DropdownMenu>
    </DropdownContainer>
  );
}

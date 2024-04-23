import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
import Login from './components/pages/Login'
import Terms from './components/pages/Terms'
import Home from './components/pages/Home'
import { ContainerDefault } from './components/layout/ContainerDefault.style';
import Register from './components/pages/Register';
import ChangeUserInformation from './components/pages/ChangeUserInformation';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <ContainerDefault>
          <Routes>
            <Route exact path='/' element={<Login/>}></Route>
            <Route exact path='/termos' element={<Terms/>}></Route>
            <Route exact path='/eventos' element={<Home/>}></Route>
            <Route exact path='/registrar' element={<Register/>}></Route>
            <Route exact path='/informacoes' element={<ChangeUserInformation/>}></Route>
          </Routes>
        </ContainerDefault>
        <Footer />
      </Router>
    </>
  );
}

import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
import Login from './components/pages/Login'
import Terms from './components/pages/Terms'
import { ContainerDefault } from './components/layout/ContainerDefault.style';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <ContainerDefault>
          <Routes>
            <Route exact path='/' element={<Login/>}></Route>
            <Route exact path='/termos' element={<Terms/>}></Route>
          </Routes>
        </ContainerDefault>
        <Footer />
      </Router>
    </>
  );
}

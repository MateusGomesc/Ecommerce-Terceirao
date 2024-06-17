import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
import Login from './components/pages/Login'
import Terms from './components/pages/Terms'
import Home from './components/pages/Home'
import { ContainerDefault } from './components/layout/ContainerDefault.style';
import Register from './components/pages/Register';
import ChangeUserInformation from './components/pages/ChangeUserInformation';
import AdminEvents from './components/pages/AdminEvents';
import AdminEventShops from './components/pages/AdminEventShops';
import AdminShop from './components/pages/AdminShop';
import AdminRegisterEvent from './components/pages/AdminRegisterModifyEvent';
import EventShop from './components/pages/EventShop';
import EventPay from './components/pages/EventPay';
import EventResume from './components/pages/EventResume';
import UserEvents from './components/pages/UserEvents';
import ProtectedRoute from "./components/layout/ProtectedRoute";

export default function App() {

  const [isAuth, setIsAuth] = useState(true)

  //verify admin user
  useEffect(() => {
    const acessToken = sessionStorage.getItem('acessToken')

    if(!acessToken){
      setIsAuth(false)
    }
    else{
      const decodeToken = jwtDecode(acessToken)
      setIsAuth(decodeToken.isAdmin)
    }
  }, [])

  return (
    <>
      <Router>
        <Header />
        <ContainerDefault>
          <Routes>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/termos' element={<Terms/>}></Route>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/registrar' element={<Register/>}></Route>
            <Route exact path='/informacoes' element={<ChangeUserInformation/>}></Route>
            <Route exact path='/admin' element={
              <ProtectedRoute isAuth={isAuth}>
                <AdminEvents/>
              </ProtectedRoute>
            }></Route>
            <Route exact path='/compras' element={
              <ProtectedRoute isAuth={isAuth}>
                <AdminEventShops/>
              </ProtectedRoute>
            }></Route>
            <Route exact path='/detalhes' element={
              <ProtectedRoute isAuth={isAuth}>
                <AdminShop/>
              </ProtectedRoute>
            }></Route>
            <Route exact path='/formulario/:type/:id' element={
              <ProtectedRoute isAuth={true}>
                <AdminRegisterEvent/>
              </ProtectedRoute>
            }></Route>
            <Route exact path='/comprar/:id' element={<EventShop/>}></Route>
            <Route exact path='/pagamento' element={<EventPay/>}></Route>
            <Route exact path='/resumo' element={<EventResume/>}></Route>
            <Route exact path='/seusEventos' element={<UserEvents/>}></Route>
          </Routes>
        </ContainerDefault>
        <Footer />
      </Router>
    </>
  );
}

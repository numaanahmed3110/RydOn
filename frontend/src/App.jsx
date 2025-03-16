import './App.css'
import React from "react";
import { Route, Routes } from "react-router-dom"
import Startup from './pages/Startup';
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import Home from './pages/Home';

function App() {

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Startup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

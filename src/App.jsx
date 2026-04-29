
import { useState } from 'react'
import LandingPage from "../src/assets/Pages/LandingPage"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './assets/Components/LogIn'
import { AppProvider } from './Context/AppContext'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App

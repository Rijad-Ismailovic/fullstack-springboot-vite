import { BrowserRouter } from "react-router-dom"
import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import HeaderComponent from "./components/HeaderComponent"
import HomepageComponent from "./components/HomepageComponent"
import FooterComponent from "./components/FooterComponent"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent></NavbarComponent>
        <HeaderComponent></HeaderComponent>
        <HomepageComponent></HomepageComponent>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Aboutus from "./Aboutus"
import Home from "./Home"
import Navbar from "./componentes/Navbar"
import Footer from "./componentes/Footer"
import Cadastro from "./componentes/Cadastro"
import Login from "./componentes/Login"


export default function AppRouter () {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/aboutus' element={<Aboutus />} />
                <Route path='/logincadastro' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    )
}
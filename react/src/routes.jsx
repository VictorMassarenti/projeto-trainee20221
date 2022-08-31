import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import useAuth from "./componentes/auth/useAuth"
import { Fragment } from "react"

import Aboutus from "./Aboutus"
import Home from "./Home"
import Navbar from "./componentes/Navbar"
import Footer from "./componentes/Footer"
import Signup from "./componentes/Signup"
import Signin from "./componentes/Signin"
import Collection from "./Collection"
import Admin from "./Admin"

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
};

export default function AppRouter() {
   
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/collection' element={<Collection />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/admin' element={<Private Item={Admin} />} />
                </Routes>
            </Fragment>
            <Footer />
        </Router>
    )
}
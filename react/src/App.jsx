import React from 'react'
import './App.css'
/* import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' */

import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import Aboutus from './Aboutus'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
  )
}

export default App

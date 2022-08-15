import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import Aboutus from './Aboutus'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Aboutus />
    {/* <Home /> */}
    {/* <Login /> */}
    <Footer />
    
  </React.StrictMode>
)

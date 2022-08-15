import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import './Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>
)

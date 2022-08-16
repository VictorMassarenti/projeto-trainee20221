import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/nav-logo/logo.png'
import './Main.css'

function Navbar() {
    const imgStyle = {
        width: '90px'
    };
    const fontSize = {
        fontSize: '24px'
    };
    const fontSizeIcon = {
        fontSize: '24px',
        padding: '6px'
    }

    return (
        <header>
            <nav className="bg-bege border-bottom shadow">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-12 col-md-2 text-center text-md-start mb-3 mb-md-0">
                            <img src={logo} alt="" style={imgStyle}></img>
                        </div>
                        <div className="col-12 col-md-8 text-center text-md-center text-md-start mb-3 mb-md-0 pt-3 text-cinza" style={fontSize}>
                            <Link to="/" className="text-decoration-none text-dark px-2"><b>Home</b></Link>
                            <Link to="/" className="text-decoration-none text-dark px-2"><b>Collection</b></Link>
                            <Link to="/aboutus" className="text-decoration-none text-dark px-2"><b>About Us</b></Link>
                        </div>

                        <div className="col-12 col-md-2 text-center text-md-end pt-4">
                            <Link to="/login" className="text-decoration-none text-dark">
                                <span className="material-icons text-cinza" style={fontSizeIcon}>
                                    person
                                </span>
                            </Link>

                            <a href="dark.html" className="text-decoration-none text-dark">
                                <span className="material-icons text-cinza" style={fontSizeIcon}>
                                    shopping_cart
                                </span>
                            </a>

                            <a href="/carrinho.html" className="text-black">
                                <span className="material-icons text-cinza text-md-center" style={fontSizeIcon}>
                                    dark_mode
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
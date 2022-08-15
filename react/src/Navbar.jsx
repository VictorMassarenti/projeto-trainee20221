import React from "react";
import logo from './assets/nav-logo/logo.png'
import './Navbar.css'

function Navbar() {
    const imgStyle = {
        width: '90px'
    };
    const fontSize = {
        fontSize: '24px'
    }

    return (
        <div className='body'>
            <div className="d-flex flex-column wrapper">
                <div className="bg-bege border-bottom shadow">
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-12 col-md-2 text-center text-md-start mb-3 mb-md-0">
                                <img src={logo} alt="" style={imgStyle}></img>
                            </div>
                            <div className="col-12 col-md-8 text-center text-md-center text-md-start mb-3 mb-md-0 pt-3 text-cinza" style={fontSize}>
                                <a href="home.html" className="text-decoration-none text-dark px-2"><b>Home</b></a>
                                <a href="collection.html" className="text-decoration-none text-dark px-2"><b>Collection</b></a>
                                <a href="about-us.html" className="text-decoration-none text-dark px-2"><b>About Us</b></a>
                            </div>

                            <div className="col-12 col-md-2 text-center text-md-end pt-4">
                                <a href="dark.html" className="text-decoration-none text-dark">
                                    <span className="material-icons text-cinza" style={fontSize}>
                                        person
                                    </span>
                                </a>

                                <a href="dark.html" className="text-decoration-none text-dark">
                                    <span className="material-icons text-cinza" style={fontSize}>
                                        shopping_cart
                                    </span>
                                </a>

                                <a href="/carrinho.html" className="text-black">
                                    <span className="material-icons md-24 text-cinza text-md-center" style={fontSize}>
                                        dark_mode
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
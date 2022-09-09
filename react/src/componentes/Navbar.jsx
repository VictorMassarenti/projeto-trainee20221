import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./auth/useAuth";


import logo from '../assets/nav-logo/logo.png'
import './Main.css'

export default function Navbar() {
    const imgStyle = {
        width: '90px'
    };
    const fontSize = {
        fontSize: '28px'
    };
    const fontSizeIcon = {
        fontSize: '24px',
        padding: '6px'
    }

    const buttonLogout = {
        backgroundColor: '#E3DDD7',
        color: '#353535',
    }

    const { signout } = useAuth();
    const navigate = useNavigate();
    const usersStorage = JSON.parse(localStorage.getItem("user_token"));
    const [hiddenAdmin, setHiddenAdmin] = useState(true);
    const [hiddenLogout, setHiddenLogout] = useState(true);
    const [hiddenWelcome, setHiddenWelcome] = useState(true)

    useEffect(() => {
        if (usersStorage === null) {
            setHiddenAdmin(true)
            setHiddenLogout(true)
            setHiddenWelcome(true)
        } else if (usersStorage != null) {
            if (usersStorage.token === 'admin') {
                setHiddenAdmin(false)
                setHiddenLogout(false)
                setHiddenWelcome(true)
            } else {
                setHiddenAdmin(true)
                setHiddenLogout(false)
                setHiddenWelcome(false)
            }
        }
    })
    return (
        <header>
            <nav className="bg-bege border-bottom shadow">
                <div className="container">
                    <div className="row py-3" style={{ padding: 0 }}>
                        <div className="col-12 col-md-2 text-center text-md-start mb-3 mb-md-0">
                            <img src={logo} alt="" style={imgStyle}></img>
                        </div>
                        <div className="col-12 col-md-8 text-center text-md-center text-md-start mb-3 mb-md-0 pt-3 text-cinza" style={fontSize}>
                            <Link to="/" className="text-decoration-none text-dark px-2"><b>Home</b></Link>
                            <Link to="/collection" className="text-decoration-none text-dark px-2"><b>Collection</b></Link>
                            <Link to="/aboutus" className="text-decoration-none text-dark px-2"><b>About us</b></Link>
                            <br />
                            <Link to="/admin" className="text-decoration-none text-dark px-2" hidden={hiddenAdmin}><b>Administrador</b></Link>
                            <b className="text-decoration-none text-dark px-2" hidden={hiddenWelcome}>Olá, seja bem vindo! </b>
                            <button
                                className="material-icons"
                                style={buttonLogout}
                                hidden={hiddenLogout}
                                onClick={() => [signout(), navigate("/signin")]}>
                                logout
                            </button>

                        </div>

                        <div className="col-12 col-md-2 text-center text-md-end pt-4">
                            <Link to="/signin" className="text-decoration-none text-dark">
                                <span className="material-icons text-cinza" style={fontSizeIcon}>
                                    person
                                </span>
                            </Link>

                            <a href="#" className="text-decoration-none text-dark">
                                <span className="material-icons text-cinza" style={fontSizeIcon}>
                                    shopping_cart
                                </span>
                            </a>

                            <a href="#" className="text-black">
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
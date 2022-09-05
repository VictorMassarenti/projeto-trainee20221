import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./auth/useAuth";

import './Signup.css'


export default function Signin() {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    function handleLogin() {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }
        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        if (email == "admin@User" && senha == "adminPassword") {
            navigate("/admin");
        } else {
            navigate("/");
        }
    };



    return (
        <div className="background_login">
            <main className="flex-fill">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="caixa_login row justify-content-center">
                            <span className="material-icons text-danger" style={{ fontSize: 42 }}>login</span><h2> Faça seu Login </h2>
                            <p><small>Digite suas informações para login</small></p>
                            <form className='login' >
                                <div className="input-group mb-3 pt-3">
                                    <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black " id="basicaddon1">email</span>
                                    <input className="form-control bg-bege input_login border-black" type="email" placeholder="Digite seu e-mail" value={email}
                                        onChange={(e) => [setEmail(e.target.value), setError("")]} />

                                </div>

                                <div className="input-group mb-3 pt-4">
                                    <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black" id="basicaddon1">key</span>
                                    <input className="form-control bg-bege input_login border-black" type="password" placeholder="Digite sua senha"
                                        value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />

                                </div>

                                <div>
                                    {error}
                                </div>

                                <div className="pt-3">
                                    <button className="btn btn-danger rounded-5" type="button" onClick={handleLogin}>
                                        <span style={{ margin: 20 }}>Login</span>
                                    </button>
                                </div>
                            </form>

                            <div className="pt-3">
                                <p><small>Não possui conta? <Link to="/signup" className="text-danger"><b>Cadastre-se!</b></Link></small></p>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    )
}

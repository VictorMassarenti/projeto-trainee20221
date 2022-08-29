import React , { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'

export default function Cadastro() {

    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    async function handleSignup(e) {
        e.preventDefault();

        console.log(email, pass)
    }

        return (
            <div className="background_login">
                <main className="flex-fill">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="caixa_login">
                                <span className="material-icons text-danger" style={{ fontSize: 42 }}>how_to_reg</span><h2> Faça seu cadastro </h2>
                                <p><small>Digite suas informações para cadastro</small></p>
                                <form className='login' onSubmit={handleSignup}>
                                    <div className="input-group mb-3 pt-3">
                                        <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black " id="basicaddon1">email</span>
                                        <input className="form-control bg-bege input_login border-black" placeholder="Cadastre seu e-mail" value={email}
                                            onChange={e => setEmail(e.target.value)} />

                                    </div>

                                    <div className="input-group mb-3 pt-4">
                                        <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black" id="basicaddon1">key</span>
                                        <input type="password" className="form-control bg-bege input_login border-black" placeholder="Cadastre sua senha"
                                            value={pass} onChange={e => setPassword(e.target.value)} />

                                    </div>

                                    <div className="pt-3">
                                        <button type="submit" className="btn btn-danger rounded-5">
                                            <span style={{ margin: 20 }}>Cadastre-se</span>
                                        </button>
                                    </div>
                                </form>

                                <div className="pt-3">
                                    <p><small>Já possui conta?  <Link to="/login" className="text-danger"><b>Faça seu login!</b></Link></small></p>
                                </div>
                            </div>


                        </div>
                    </div>
                </main>
            </div>
        )
    }

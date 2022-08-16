import React from "react";
import { Link } from "react-router-dom";
import './Cadastro.css'

export default function Login() {
    return (
        <div className="background_login">
            <main className="flex-fill">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="caixa_login">
                        <span className="material-icons text-danger" style={{ fontSize: 42}}>login</span><h2> Faça seu Login </h2>
                            <p><small>Digite suas informações para login</small></p>
                            <div className="input-group mb-3 pt-3">
                                <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black " id="basicaddon1">email</span>
                                <input type="text" className="form-control bg-bege input_login border-black" placeholder="Digite seu e-mail" />

                            </div>

                            <div className="input-group mb-3 pt-4">
                                <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black" id="basicaddon1">key</span>
                                <input type="text" className="form-control bg-bege input_login border-black" placeholder="Digite sua senha" />

                            </div>

                            <div className="pt-3">
                                <button className="btn btn-danger rounded-5" >
                                    <span style={{margin:20}}>Login</span>
                                </button>
                            </div>

                            <div className="pt-3">
                                <p><small>Não possui conta? <Link to="/logincadastro" className="text-danger"><b>Cadastre-se!</b></Link></small></p>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    )
}

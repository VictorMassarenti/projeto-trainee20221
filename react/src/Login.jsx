import React from "react";
import './Login.css'

function Login() {
    return (
        <div className="background_login">
            <main className="flex-fill">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="caixa_login">
                            <h2> Faça seu cadastro </h2>
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
                                <button className="btn btn-danger rounded-5">
                                    CADASTRE-SE
                                </button>
                            </div>

                            <div className="pt-3">
                                <p><small>Já possui conta?  <a href="login.html" className="text-danger"><b>Faça seu login</b></a></small></p>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login
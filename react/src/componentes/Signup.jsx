import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./auth/useAuth"
import './Signup.css'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadatrado com sucesso!");
        navigate("/signin");
    };

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
                                    <input className="form-control bg-bege input_login border-black" type="email" placeholder="Cadastre seu e-mail" value={email}
                                        onChange={(e) => [setEmail(e.target.value), setError("")]} />

                                </div>

                                <div className="input-group mb-3 pt-3">
                                    <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black " id="basicaddon1">email</span>
                                    <input className="form-control bg-bege input_login border-black" type="email" placeholder="Confirme seu e-mail" value={emailConf}
                                        onChange={(e) => [setEmailConf(e.target.value), setError("")]} />

                                </div>

                                <div className="input-group mb-3 pt-4">
                                    <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black" id="basicaddon1">key</span>
                                    <input type="password" className="form-control bg-bege input_login border-black" placeholder="Cadastre sua senha"
                                        value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />

                                </div>

                                <div>{error}</div>

                                <div className="pt-3">
                                    <button className="btn btn-danger rounded-5" type="submit" >
                                        <span style={{ margin: 20 }}>Cadastre-se</span>
                                    </button>
                                </div>
                            </form>

                            <div className="pt-3">
                                <p><small>Já possui conta?  <Link to="/signin" className="text-danger"><b>Faça seu login!</b></Link></small></p>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    )
}

export default Signup;
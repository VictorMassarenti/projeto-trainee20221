import React, { useState } from "react";
import { Link } from "react-router-dom";
/* import { useHistory } from 'react-router-dom' */
import './Signup.css'
import validacaoLogin from "./validacaoLogin";

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    /* const history = useHistory(); */

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            email,
            pass
        }

        if (email == "admin" && pass == "admin") {
            console.log('funcionando') /* window.location = "/Admin"; */
        }
        else { alert("Dados incorretos, tente novamente"); }

        /*  try {
             const response = await api.get('/login', { data })
 
             localStorage.setItem('id', response.data.user.id)
             localStorage.setItem('nome', response.data.user.nome)
 
             alert(response.data.user);
             history.push('/calendario')
         } catch (err) {
             alert("nope");
         } */
    }

    return (
        <div className="background_login">
            <main className="flex-fill">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="caixa_login">
                            <span className="material-icons text-danger" style={{ fontSize: 42 }}>login</span><h2> Faça seu Login </h2>
                            <p><small>Digite suas informações para login</small></p>
                            <form className='login' onSubmit={handleLogin}>
                                <div className="input-group mb-3 pt-3">
                                    <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black " id="basicaddon1">email</span>
                                    <input className="form-control bg-bege input_login border-black" placeholder="Digite seu e-mail" value={email}
                                        onChange={e => setEmail(e.target.value)} />

                                </div>

                                <div className="input-group mb-3 pt-4">
                                    <span className="input-group-text bg-bege material-icons text-danger pt-2 border-black" id="basicaddon1">key</span>
                                    <input type="password" className="form-control bg-bege input_login border-black" placeholder="Digite sua senha"
                                        value={pass} onChange={e => setPassword(e.target.value)} />

                                </div>

                                <div className="pt-3">
                                    <button type="submit" className="btn btn-danger rounded-5">
                                        <span style={{ margin: 20 }}>Login</span>
                                    </button>
                                </div>
                            </form>

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

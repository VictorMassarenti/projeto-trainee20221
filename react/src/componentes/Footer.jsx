import React from "react";
import './Main.css'

function Footer() {
    return (
        <footer className="border-top text-muted bg-light">

            <div className="container">
                <div className="row py-3">
                    <div className="col-12 col-md-4 text-center">
                        &copy; 2022 - Panda Store Ltda ME <br />
                        Rua Virtual Larusso de Oliveira, 171, Salvador/BA <br />
                        CNPJ 99.999.999/0001-99
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <a href="/privacidade.html" className="text-decoration-none text-dark">Política de Privacidade</a><br />
                        <a href="/termos.html" className="text-decoration-none text-dark">Termos de Uso</a><br />
                        <a href="/quemsomos.html" className="text-decoration-none text-dark">Quem Somos</a><br />
                        <a href="/trocas.html" className="text-decoration-none text-dark">Trocas e Devoluções</a>
                    </div>

                    <div className="col-12 col-md-4 text-center">
                        <a href="/contato" className="text-decoration-none text-dark">Contato pelo Site</a><br />
                        Email: <a href="mailto:email@dominio.com" className="text-decoration-none text-dark">email@dominio.com</a><br />
                        <a href="phone:71999998302" className="text-decoration-none text-dark">(71) 9 9999-9999</a><br />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
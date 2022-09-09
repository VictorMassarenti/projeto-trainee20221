import React, { useState, useEffect} from "react";
import ButtonBuy from "./componentes/ButtonBuy";
import api from "./componentes/api/api";


import './componentes/Main.css'
import bolsa from './assets/home/bolsa_style.jpg';
import marwan from './assets/home/Camisa Marwan.jpg';
import nagakawa from './assets/home/casaco_nagakawa.jpg';
import tshirt from './assets/home/tshirt_black_cortado.jpg';
import urban from './assets/home/casaco_urban_cortado.jpg';

export default function Collection() {
    const fontStyle = {
        fontSize: '24px',
        lineHeight: '24px'
    }

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        api
            .get("/produtos")
            .then((response) => setAPIData(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }, [])

    return (

        <main className="flex-fill">
            <div className="container">
                <div className="row g-3 mt-4">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={marwan} className="card-img-top" alt="" />
                            <div className="card-header d-flex text-center">
                                <div className="mx-auto" >
                                    R$149,00
                                </div>
                                <ButtonBuy />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Camisa Seirafi</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={marwan} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Conjunto Banks</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={marwan} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 249,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Camisa Kazal</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart-fill" style={fontStyle}>
                                </i>
                            </a>

                            <img src={urban} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 249,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Casaco Urban</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={tshirt} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Camisa Basic Preta</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={nagakawa} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Casaco Nagakawa</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={bolsa} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 249,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bolsa Style</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={marwan} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Camisa Marwan</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={nagakawa} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 249,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Casaco Nagakawa</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart-fill" style={fontStyle}>
                                </i>
                            </a>

                            <img src={urban} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 249,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Casaco Urban</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={tshirt} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Camisa Basic Preta</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={nagakawa} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Casaco Nagakawa</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={bolsa} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 249,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bolsa Style</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={marwan} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Camisa Marwan</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={nagakawa} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 249,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Casaco Nagakawa</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart-fill" style={fontStyle}>
                                </i>
                            </a>

                            <img src={urban} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 249,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Casaco Urban</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={tshirt} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Camisa Basic Preta</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light" >
                            <a href="" className="position-absolute p-2 text-danger">
                                <i className="bi-suit-heart" style={fontStyle}>
                                </i>
                            </a>

                            <img src={nagakawa} className="card-img-top" alt="" />
                            <div className="card-header">
                                R$ 149,90
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Casaco Nagakawa</h5>
                                <p className="card-text truncar-3l"></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </main>

    )
}
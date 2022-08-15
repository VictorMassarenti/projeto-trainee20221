import React from "react";
import './Main.css'
import banner from './assets/home/banner-cortado.jpg';
import bolsa from './assets/home/bolsa_style.jpg';
import marwan from './assets/home/Camisa Marwan.jpg';
import nagakawa from './assets/home/casaco_nagakawa.jpg';
import tshirt from './assets/home/tshirt_black_cortado.jpg';
import urban from './assets/home/casaco_urban_cortado.jpg';

function Home() {
    const fontStyle = {
        fontSize: '24px',
        lineHeight: '24px'
    }
    return (
        <main className="flex-fill">
            <div className="container">
                <div id="carouselExampleControls" className="carousel slide mt-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src={banner} className="d-block w-100 banner" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src={banner} className="d-block w-100 banner" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src={banner} className="d-block w-100 banner" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Próximo</span>
                    </button>
                </div>

                <hr className="mt-3"></hr>

                <div className="row">
                    <div className="col-12 col-md-5">
                        <form action="" className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="O que procura?" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-dark" type="button" id="button-addon2">Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                            <form action="" className="d-inline-block">
                                <select className="form-select form-select-sm" id="">
                                    <option>Ordenar pelo nome</option>
                                    <option>Ordenar pelo menor preço</option>
                                    <option>Ordenar pelo maior preço</option>
                                    <option>Camisas</option>
                                    <option>Calças</option>
                                    <option>Shorts</option>
                                    <option>Casacos</option>
                                </select>
                            </form>
                            <nav className="d-inline-block me-3 mr-3">
                                <ul className="pagination pagination-sm my-0">
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item disabled"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="row g-3">
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

                <hr></hr>

                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                            <form action="" className="d-inline-block">
                                <select className="form-select form-select-sm" id="">
                                    <option>Ordenar pelo nome</option>
                                    <option>Ordenar pelo menor preço</option>
                                    <option>Ordenar pelo maior preço</option>
                                </select>
                            </form>
                            <nav className="d-inline-block me-3 mr-3">
                                <ul className="pagination pagination-sm my-0">
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item disabled"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </main>

    )
}

export default Home
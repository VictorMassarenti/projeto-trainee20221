import React from "react";
import CriarProdutoAdmin from "./componentes/Admin/CriarProdutoAdmin";
import ProdutoAdmin from "./componentes/Admin/ProdutoAdmin";

export default function Admin() {

  return (
    <main className="flex-fill">
      <div className="container">


        <h1 className="text-center mt-3 mb-5">Gerenciador de Produtos</h1>

        <hr></hr>

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
            </div>
          </div>
        </div>

        <hr></hr>

        <table className="table table-striped mt-4">
          <thead className="table">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Produto</th>
              <th scope="col">Estoque</th>
              <th scope="col"></th>
              <th scope="col">Preço &#40;R$&#41;</th>
            </tr>
          </thead>
            <ProdutoAdmin />
        </table>
        <CriarProdutoAdmin />
      </div>
    </main>
  )
}
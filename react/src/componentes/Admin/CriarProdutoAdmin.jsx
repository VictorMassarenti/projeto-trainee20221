import React from "react";
import { useState, useEffect } from "react";
import api from "../api/api";

export default function CriarProdutoAdmin() {
    const [name, setName] = useState('');
    const [estoque, setEstoque] = useState('');
    const [preco, setPreco] = useState('');
    const [id, setId] = useState(0);

    useEffect(() => {
        setId(Math.floor(Math.random() * (999999 - 100000) + 100000).toString());
    }, []);

    function postData() {
        setId(Math.floor(Math.random() * (999999 - 100000) + 100000).toString());
        api
            .post("/produtos", {
                name,
                estoque,
                preco,
                id,
            })
            .then((response) => console.log(response))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }

    return (
        <>
            <h3 className="mt-3 mb-3">
                Criar Produto
            </h3>
            <form>
                <div className="mb-3">
                    <label for="criar-produto-nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control w-50"
                        id="criar-produto-nome"
                        aria-describedby=""
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="criar-produto-preço" className="form-label">Preço &#40;R$&#41;</label>
                    <input
                        type="number"
                        step="any"
                        className="form-control w-50"
                        id="criar-produto-preço"
                        onChange={(e) => setEstoque(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="criar-produto-estoque" className="form-label">Estoque</label>
                    <input
                        type="number"
                        className="form-control w-50"
                        id="criar-produto-estoque"
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </div>
                {/* <div className="mb-3">
                    <label for="criar-produto-imagem" className="form-label">Adicionar Imagem (1920 x 1080)</label>
                    <input type="file" className="form-control w-50" id="criar-produto-imagem"/>
                </div> */}
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label
                        className="form-check-label"
                    >Confirmo os dados supracitados
                    </label>
                </div>
                
                <button
                    onClick={postData}
                    type="button"
                    className="btn btn-danger"
                >Criar</button>
            </form>
            <hr></hr>
        </>
    )
}
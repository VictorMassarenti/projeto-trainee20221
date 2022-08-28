import React from "react";

export default function CriarProdutoAdmin() {
    return (
        <>
            <h3 className="mt-3 mb-3">
                Criar Produto
            </h3>
            <form>
                <div className="mb-3">
                    <label for="criar-produto-nome" className="form-label">Nome</label>
                    <input type="text" className="form-control w-50" id="criar-produto-nome" aria-describedby=""/>
                </div>
                <div className="mb-3">
                    <label for="criar-produto-preço" className="form-label">Preço &#40;R$&#41;</label>
                    <input type="text" className="form-control w-50" id="criar-produto-preço"/>
                </div>
                <div className="mb-3">
                    <label for="criar-produto-estoque" className="form-label">Estoque</label>
                    <input type="text" className="form-control w-50" id="criar-produto-estoque"/>
                </div>
                <div className="mb-3">
                    <label for="criar-produto-imagem" className="form-label">Adicionar Imagem (1920 x 1080)</label>
                    <input type="file" className="form-control w-50" id="criar-produto-imagem"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="criar-produto-check">Confirmo os dados supracitados</label>
                </div>
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
            <hr></hr>
        </>
    )
}
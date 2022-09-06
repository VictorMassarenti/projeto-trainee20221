import React from "react";

export default function AvisoAdmin() {
    const avisoStyle = {
        outline: 'dashed',
        borderRadius: 30,
        padding: 10,
        marginBottom: 20,
    };

    return (
        <div style={avisoStyle} hidden={true}>
            <h3 className="text-center">Avisos</h3>

            <table className="table table-striped mt-2">
                <thead className="table">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Estoque</th>
                        <th scope="col">Preço &#40;R$&#41;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">#01219</th>
                        <td>Camisa Marwan</td>
                        <td>
                            <div className="d-flex">
                                <div className="btn btn-danger rounded-2">
                                    <small>BAIXO ESTOQUE</small>
                                </div>
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
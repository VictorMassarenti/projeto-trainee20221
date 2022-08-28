import React from "react";

export default function ProdutoAdmin() {
    return (
        <tr>
            <th scope="row">#01219</th>
            <td>Camisa Marwan</td>
            <td>
                <div className="d-flex">
                    <button className="btn btn-light text-danger">
                        -
                    </button>
                    <div className="pt-1 ps-3 pe-3">
                        <input type="text" className="form-control quantidade_estoque" placeholder="" value="100" />

                    </div>
                    <button className="btn btn-light text-primary">
                        +
                    </button>

                </div>
            </td>
            <td>
                <input type="text" className="form-control quantidade_estoque" placeholder="" value="100" />
            </td>
        </tr>
    )
}
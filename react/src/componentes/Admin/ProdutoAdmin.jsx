import React, { useEffect, useState } from 'react';
import api from "../api/api";


export default function ProdutoAdmin() {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        api
            .get("/produtos")
            .then((response) => setAPIData(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }, [])

    function onDelete(id) {
        api
            .delete(`/produtos/${id}`)
            .then(() => {
                getData();
            })
    }

    function getData() {
        api
            .get("/produtos")
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    return (
        < tbody className="table-group-divider" >
            {
                APIData.map((data) => {
                    return (

                        <tr scope="row">
                            <th>{data.id}</th>
                            <th>{data.name}</th>
                            <th>{data.inventory}</th>
                            <th ><span className="d-flex">
                                    <div className="btn btn-danger rounded-2" hidden={(data.inventory > 10)}>
                                        <small>BAIXO ESTOQUE</small>
                                    </div>
                                </span></th>
                            <th >{data.price / 100}</th>
                            <th >
                                <button
                                    className="material-icons btn btn-danger"
                                    onClick={() => onDelete(data.id)}>
                                    delete_forever
                                </button>
                            </th>
                        </tr>
                    )
                })
            }
        </tbody >
    )
}
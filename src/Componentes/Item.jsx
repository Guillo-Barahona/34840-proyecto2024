import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to ={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="tarjetas card border border-dark border-opacity-25 fondoBody ">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body text-center">
                    <p className="card-text">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
};

export default Item;
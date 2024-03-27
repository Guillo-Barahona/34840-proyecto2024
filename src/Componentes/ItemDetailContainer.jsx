import React, { useEffect, useState } from "react";
import arrayProductos from "./json/arrayProductos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve) =>{
            console.log("id del producto: " + id);
            setTimeout(()=>{

                resolve(arrayProductos.find(item => item.id === parseInt(id))) //para que retorne un objeto (esta fijado por el momento)
            },2000);
        });

        promesa.then((data) =>{
        setItem(data)})
    },[id])



    return (
        <div className="container text-dark">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;
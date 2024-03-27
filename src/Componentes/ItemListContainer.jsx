import React, { useEffect, useState} from "react";
import arrayProductos from "./json/arrayProductos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        console.log(id);
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve (id ? arrayProductos.filter(item => item.categoria === id): arrayProductos);
            },2000);
        }); 

        promesa.then ((data) => {
            setItems(data);
        });

    },[id]);

    return (
        <div className="container py-5">
            <ItemList items={items}/> {/* manda como prompt el array de objetos completo */}
        </div>
    )
}

export default ItemListContainer;
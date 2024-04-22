import React, { useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {  collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // Consultar la Collection de mis productos 
        useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            const q = id ? query(itemsCollection, where("categoria", "==", id)): itemsCollection;    //si mi categoria es igual al id que tenga, filtrar con eso, si no, mandar el itemCollection completo

            getDocs(q).then((snapShot) => {
                setItems(snapShot.docs.map((varIter) => ({id:varIter.id, ...varIter.data()})));
                setLoading(false);
            });
        },[id])

    return (
        <div className="container py-5">
            {loading ? <Loading/> : <ItemList items={items}/> } {/* manda como prompt el array de objetos completo */}
        </div>
    )
}

export default ItemListContainer;
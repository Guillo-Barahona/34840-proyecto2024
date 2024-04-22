import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    //Consultar a Firestore por un ID
useEffect(() => {
    const db = getFirestore();
    const documento = doc(db, "items", id);
    getDoc(documento).then((snapShot) =>{
        if (snapShot.exists()) {
            setItem({id:snapShot.id, ...snapShot.data()}) //se guarda en el state 'item' un objeto con el id y el resto de los campos restantes
            setLoading(false);
        } else {
            console.log('Error!! El producto no se encontro!!');
        }
    })
},[id]);




    return (
        <div className="container text-dark">
            {loading ? <Loading/> : <ItemDetail item={item}/>}
            
        </div>
    )
}

export default ItemDetailContainer;
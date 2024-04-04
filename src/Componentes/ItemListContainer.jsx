import React, { useEffect, useState} from "react";
//import arrayProductos from "./json/arrayProductos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {  collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

/*     useEffect(() => {
        console.log(id);
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve (id ? arrayProductos.filter(item => item.categoria === id): arrayProductos);
            },2000);
        }); 

        promesa.then ((data) => {
            setItems(data);
        });

    },[id]); */



    //Insertar los productos de mi JSON a Firestore
        /*     useEffect(() =>{
            const db = getFirestore();
            const itemsCollection = collection (db, "items");

            arrayProductos.forEach((varIter) => {
                addDoc(itemsCollection, varIter)
            })
        },[])
 */

    // Consultar la Collection de mis productos 
        useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            //const q = query(itemsCollection, where("precio","<",1600)) //Filtro los items del Documento con una condicion
            const q = id ? query(itemsCollection, where("categoria", "==", id)): itemsCollection;    //si mi categoria es igual al id que tenga, filtrar con eso, si no, mandar el itemCollection completo

            getDocs(q).then((snapShot) => {
                setItems(snapShot.docs.map((varIter) => (
                    {id:varIter.id, ...varIter.data()}
                )
                ));
            });
        },[id])

    return (
        <div className="container py-5">
            <ItemList items={items}/> {/* manda como prompt el array de objetos completo */}
        </div>
    )
}

export default ItemListContainer;
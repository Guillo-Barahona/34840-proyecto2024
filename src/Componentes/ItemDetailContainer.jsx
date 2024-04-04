import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import arrayProductos from "./json/arrayProductos.json";
import { getFirestore, doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();


    //Promesa que accede a un JSON con un Array de objetos
/*     useEffect(()=>{
        const promesa = new Promise((resolve) =>{
            console.log("id del producto: " + id);
            setTimeout(()=>{

                resolve(arrayProductos.find(item => item.id === parseInt(id))) //para que retorne un objeto (esta fijado por el momento)
            },2000);
        });

        promesa.then((data) =>{
        setItem(data)})
    },[id]) */



    //Consultar a Firestore por un ID
useEffect(() => {
    const db = getFirestore();
    const documento = doc(db, "items", id);
    getDoc(documento).then((snapShot) =>{
        if (snapShot.exists()) {
            setItem({id:snapShot.id, ...snapShot.data()}) //se guarda en el state 'item' un objeto con el id y el resto de los campos restantes
            //console.log(item);
        } else {
            console.log('Error!! El producto no se encontro!!');
        }
    })
},[]);




    return (
        <div className="container text-dark">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;
import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
    //console.log("stock del producto: " + stock);
    
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock); // para validar el stock disponible
    const [vendido, setVendido] = useState(false);


    const incrementarStock = () => {
        if (contador < itemStock){
            setContador(contador + 1);
        }
    }

    const decrementarStock = () => {
        if (contador > 1)
            setContador(contador - 1);
    }

    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity)
        setVendido(true);
        onAdd(quantity);
        setContador(1);
        
/*             if (contador <= stock) {
            setStock(stock - contador);
            setContador(1);
            console.log("Agregaste: " + contador + " Productos al Carrito!");
        } */
    }

    useEffect (() =>{ // se uso para cargar el stock que le llega por parametro, y actualiza el estado del itemStock (sin esto, los contadorews no funcionan porque cargan pas rapido que el state)
        setItemStock(stock)
    },[stock]);

    return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                        <div className="btn-group mb-1" role="group" aria-label="Second group">
                            <button type="button" className="btn btn-danger" onClick={decrementarStock}>-</button>
                            <button type="button" className="btn btn-secondary">{contador}</button>
                            <button type="button" className="btn btn-primary" onClick={incrementarStock}>+</button>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-12">
                        {vendido ? <Link to="/cart"><button className="btn btn-outline-primary bg-warning">Finalizar la compra</button></Link> : 
                        <button className="btn btn-outline-primary" onClick={() => {addToCart(contador)}}>Agregar al Carrito</button>}   {/* si vendido tiene valor de true, entonces muestra el boton de 'terminar la compra' y redirige al carrito, si no, se muestra el boton de 'agregar al carrito' */}
                        <p className="fw-lighter fst-italic text-secondary">{stock} productos en stock</p>
                    </div>
                </div>
            </div>
    )
}

export default ItemCount;
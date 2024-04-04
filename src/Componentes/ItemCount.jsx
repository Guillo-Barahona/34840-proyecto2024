import React, { useState } from "react";


const ItemCount = ({stockItems}) => {
    //console.log("stock del producto: " + stockItems);
    
    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(stockItems); // para validar el stock disponible


    const incrementarStock = () => {
        if (contador < stock){
            setContador(contador + 1);
        }
    }

    const decrementarStock = () => {
        if (contador > 1)
        setContador(contador - 1);
    }

        const onAdd = () => {
            if (contador <= stock) {
                setStock(stock - contador);
                setContador(1);
                console.log("Agregaste: " + contador + " Productos al Carrito!");
            }
        }


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
                        <button className="btn btn-outline-primary" onClick={onAdd}>Agregar al Carrito</button>   {/* si vendido tiene valo de true, entonces muestra el obton de 'terminar la compra' y redirige al carrito, si no, se muestra el boton de 'agregar al carrito' */}
                    </div>
                </div>
            </div>
    )
}

export default ItemCount;
import React, { createContext, useState } from "react";

export const CartContext = createContext();




const CartContextProvider = ({children}) => {
    const[cart, setCart] = useState([]);


    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            let posicion = cart.findIndex(varIter => varIter.id === item.id); //busca la posicion del producto
            cart[posicion].quantity += quantity //se modifica la cantidad con la quantity que se le pasa como parametro
            setCart([...cart]) //se modifica (el quantity) y se le manda nuevamente todo lo del cart
        } else {
            setCart([...cart,{...item, quantity:1}]);   // tira los objetos que habia antes con el [...cart], + lo nuevo (todas las propiedades del objeto con (...item) + la propiedad nueva de quantity)
        }
    }

    const removeItem = (id) =>{
        const productos = cart.filter(varIter => varIter.id !== id);
        setCart(productos);
    }

    const clearCart = () =>{
        setCart([])
    }


    const isInCart = (id) =>{
        return cart.some(varIter => varIter.id === id);
    }

    const cartTotal = () =>{
        return cart.reduce((acum, item) => acum += item.quantity)  //manda una funcion, al acumulador se le va sumando el item.quantity ("es una variable de iteracion")
    }

    const sumTotal = () =>{
        return cart.reduce((acum, item) => acum += item.quantity * item.recio)  // al acumulador se le va sumando el item.quantity ("es una variable de iteracion")
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
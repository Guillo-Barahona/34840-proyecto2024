import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = ()=> {
    const {cart, clearCart, sumTotal, cartTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState(""); 
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.quantity * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal(),
            quantity: cartTotal()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clearCart();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div class="mb-3">
                            <label htmlFor="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" onClick={generarOrden} class="btn fondoNaranja">Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table class="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/thankyou/" + orderId}/> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;


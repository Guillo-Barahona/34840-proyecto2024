import React from "react";
import CartWidget from "./cartWidget";

    

const NavBar = ()=>{

    return (

        <div className="container bg-light">
            <div className='row'>
                <div className='col-md-6'>

                    <nav className="navbar navbar-expand-lg" >
                        <div className="container-fluid  ">
                        <a className="navbar-brand" href="www.google.com"><img src={'images/logo_roloza.png'} alt={'logo-roloza'} width={'80px'}></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <a className="nav-link" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/productos">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/nosotros">Nosotros</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                </div>
                
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>    
            </div>
        </div>



    )

}
export default NavBar;
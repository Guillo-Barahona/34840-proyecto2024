import React from "react";
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "./cartWidget";

    

const NavBar = ()=>{

    return (

        <div className="container bg-light">
            <div className='row'>
                <div className='col-md-6'>

                    <nav className="navbar navbar-expand-lg" >
                        <div className="container-fluid  ">
                        <Link className="navbar-brand" to={"/"}><img src={'/images/logo_roloza.png'} alt={'logo-roloza'} width={'80px'}></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <NavLink className="nav-link" aria-current="page" to={"/category/carne"}>Carne</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/pollo"}>Pollo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/ensalada"}>Ensaladas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/papas"}>Papas Fritas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/postres"}>Postres</NavLink>
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
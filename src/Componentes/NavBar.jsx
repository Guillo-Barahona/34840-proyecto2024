import React from "react";
import { Link, NavLink } from 'react-router-dom';

    

const NavBar = ()=>{

    return (

        <div className="navBarElements container-fluid">
            <div className='row px-5'>
                <div className='col d-flex justify-content-end'>

                    <nav className="navbar navbar-expand-lg" >
                        <div className="container-fluid  ">
                        <Link className="navbar-brand" to={"/"}><button className="btn fondoNaranja">Todas las Categorias</button></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <NavLink className="nav-link text-light" aria-current="page" to={"/category/escritorio"}>Escritorios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to={"/category/silla"}>Sillas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to={"/category/escolar"}>Escolares</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to={"/category/sofa"}>Sofás</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to={"/category/trabajo"}>Espacios de Trabajo</NavLink>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                </div>
                
            </div>
        </div>



    )

}
export default NavBar;
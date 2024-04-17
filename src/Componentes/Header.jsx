import React from "react";
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "./cartWidget";

    

const Header = ()=>{

    return (

        <div className="Header container-fluid">
            <div className='row py-4 px-5'>
                <div className='col-md-6 d-flex align-items-center'>
                        <Link className="navbar-brand" to={"/"}><img src={'/images/LogoBlancoRojo.svg'} alt={'logo-dipay'} width={'120px'}></img></Link>
                </div>
                
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>    
            </div>
        </div>



    )

}
export default Header;
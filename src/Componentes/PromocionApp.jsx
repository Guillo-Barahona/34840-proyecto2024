import React from "react";

const PromocionApp = () => {

    return (
<div className="container-fluid fondoVerde py-5">
    <div className="container">
        <div className="row ">
            <div className="col-md-6 text-center PromocionSquare">
                <img src={"/images/promoSilla2.png"} alt={"Smartphone app"}  width={320}/>
            </div>
            <div className="col-md-6 d-flex align-items-center PromocionSquare">
                <div>
                    <h3>Más que muebles para oficina</h3>
                    <p><a href="https://play.google.com/store/apps/details?id=ar.burgerking" target={"_blank"} rel="noreferrer"><img src={"/images/google_play.png"} alt={"Android"} width={135} /></a> <a href="https://apps.apple.com/us/app/id1528704320" target={"_blank"} rel="noreferrer"><img src={"/images/app__store.png"} alt={"Apple"} width={135} /></a></p>
                    <p>Transforma tu espacio de trabajo en un oasis de productividad con nuestro mobiliario de oficina de alta calidad y diseño innovador.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default PromocionApp;
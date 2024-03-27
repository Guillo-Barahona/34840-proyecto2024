import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import PromocionApp from './Componentes/PromocionApp';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Error404 from './Componentes/Error404';




function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <NavBar/>

          <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"*"} element={<Error404/>}/>
          </Routes>
        

        <PromocionApp/>
        <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;

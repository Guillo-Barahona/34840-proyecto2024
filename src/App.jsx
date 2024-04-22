import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import PromocionApp from './Componentes/PromocionApp';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Error404 from './Componentes/Error404';
import CartContextProvider from './Componentes/context/CartContext';
import Cart from './Componentes/Cart';
import Checkout from './Componentes/Checkout';
import Header from './Componentes/Header';
import ThankYou from './Componentes/ThankYou';




function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <NavBar/>

            <Routes>
              <Route path={"/"} element={<ItemListContainer/>}/>
              <Route path={"/category/:id"} element={<ItemListContainer/>}/>
              <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
              <Route path={"/cart"} element={<Cart/>}/>
              <Route path={"/checkout"} element={<Checkout/>}/>
              <Route path={"/thankyou/:id"} element={<ThankYou/>}/>
              <Route path={"*"} element={<Error404/>}/>
            </Routes>
          
          <PromocionApp/>
          <Footer/>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;

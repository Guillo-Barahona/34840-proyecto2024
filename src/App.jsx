import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import PromocionApp from './Componentes/PromocionApp';
import ItemListContainer from './Componentes/ItemListContainer';


function App() {
  return (
    <div className="App container-fluid">
      <NavBar/>
      <ItemListContainer greeting = {"Hola!! No se encontraron productos"}/>
      <PromocionApp/>
      <Footer/>
    </div>
  );
}

export default App;

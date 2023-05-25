import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes
, Route } from 'react-router-dom';

function App() {
  const marca = "Dfusion TM";
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
      <Route path='/Item/:idItem' element={<ItemDetailContainer/>} />


    </Routes>

    </BrowserRouter>
    
    
    </>
  );
}

export default App;

import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  const marca = "Dfusion TM";
  return (
    <>
    <NavBar />
    <ItemListContainer greeting= "Bienvenidx" />
    
    </>
  );
}

export default App;

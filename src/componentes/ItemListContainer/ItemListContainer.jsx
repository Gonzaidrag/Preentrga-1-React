import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {inventario} from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect( ()=> {
    const misProductos = idCategoria ? query(collection(inventario, "inventario"), where("idCat", "==", idCategoria)) : collection(inventario, "inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  },[idCategoria])


  return (
    <>
    <h2 style={{textAlign: "center"}}> Temporada de Verano 2K23 </h2>
    <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer

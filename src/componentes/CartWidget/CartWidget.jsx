import './CartWidget.css'
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'
import { useContext } from 'react';

const CartWidget = () => {
const imgCarrito = "https://png.pngtree.com/png-clipart/20190903/original/pngtree-shopping-cart-icon-png-image_4423346.jpg";
const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div>
    <Link style={{textDecoration:"none"}} to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
      {
        cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
      }
    </Link>
  </div>
  )
}

export default CartWidget

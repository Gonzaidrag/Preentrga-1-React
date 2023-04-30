import './CartWidget.css'

const CartWidget = () => {
const imgCarrito = "https://png.pngtree.com/png-clipart/20190903/original/pngtree-shopping-cart-icon-png-image_4423346.jpg"
  return (
    <div>
      <img className= "imgCarrito" src={imgCarrito} alt="Carrito" />
      <strong>999</strong>
    </div>
  )
}

export default CartWidget

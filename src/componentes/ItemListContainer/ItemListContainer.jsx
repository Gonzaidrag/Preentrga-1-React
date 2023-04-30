import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <h2 className='titulo'>
      Esta es la tienda oficial de Dfusion {props.greeting}
    </h2>
  )
}

export default ItemListContainer

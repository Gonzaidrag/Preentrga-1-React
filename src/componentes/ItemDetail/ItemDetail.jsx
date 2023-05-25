import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eos molestias ea tempore odit nobis quia, nulla ad harum est itaque inventore perferendis animi optio officiis quasi nihil ut. Aut!</p>
            <img src={img} alt={nombre} />

        </div>
    )
}

export default ItemDetail
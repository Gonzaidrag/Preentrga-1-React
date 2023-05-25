const productos = [
    {nombre: "Remera Blanca", precio: 4500, id: "1" , img:"../", idCat:"1"},
    {nombre: "Bermuda Blanca", precio: 5300, id:"2", img:"../", idCat:"2"},
    {nombre: "Remera Negra", precio: 4500, id: "3", img:"../" , idCat:"1"},
    {nombre: "Bermuda Negra", precio: 5300, id:"4", img:"../" , idCat:"2"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id ===id);
            resolve(productos);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}
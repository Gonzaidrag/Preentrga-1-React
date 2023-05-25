import { useState, useEffect } from "react";



const misProductos = [
    {nombre: "Remera Blanca", precio: 4500, id: "1" , img:"../", idCat:"1"},
    {nombre: "Bermuda Blanca", precio: 5300, id:"2", img:"../", idCat:"2"},
    {nombre: "Remera Negra", precio: 4500, id: "3", img:"../" , idCat:"1"},
    {nombre: "Bermuda Negra", precio: 5300, id:"4", img:"../" , idCat:"2"},
];



const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


const AsyncAwait = () => {
    const [misProductos, setMisProductos] = useState([]);

    useEffect( ()=> {

        console.log(getMisProductos());
        

        const pedirDatos = async () => {
            const inventarioProductos = await getMisProductos();
            setMisProductos(inventarioProductos);
        }

        pedirDatos();

    }, [])
    return (
        <div>
            <h2>Mis productos usando Async Await</h2>
            {
                misProductos.map((producto,index) => {
                    return (
                        <div key={index}>
                            <p> {producto.nombre} </p>
                            <p> {producto.precio} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AsyncAwait
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [load,setLoad] = useState(false)
    const [productos, setProductos] = useState ([])

    const params = useParams()
    console.log(params.id)

    useEffect (() => {

        const pedido = fetch("https://fakestoreapi.com/products")

        pedido
        .then((respuesta) => {
            const productos = respuesta.json ()
            return productos
        })
        .then ((productos) => {
            setProductos (productos)
            setLoad (true)
        })

        .catch((error) => {
            console.log (error)
        })

    }, [])

    return(
        <div>

            {load ? null : `Cargando...`}

            <ItemList productos={productos} />

        </div>
    )
}

export default ItemListContainer
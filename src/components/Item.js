import { useState } from 'react'

export default function Item(props) {
    const [stock, setStock] = useState(props.stock)

    const handleClick = () => {
        setStock((prevStock) => prevStock - 1)
        props.onAddItemToCart()
    }

    return (
        <div className='producto' id={props.id}>
            <h3>{props.producto.nombre}</h3>
            <p>{props.producto.descripcion}</p>
            <h5>En Stock: {stock > 0 ? stock : <span>Agotado</span>}</h5>
            <button onClick={handleClick} disabled={stock <= 0}>
                {stock > 0 ? 'COMPRAR' : 'SIN STOCK'}
            </button>
        </div>
    )
}

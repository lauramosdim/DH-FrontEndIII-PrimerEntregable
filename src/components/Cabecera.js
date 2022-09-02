import React from 'react'

export default function Cabecera({ cartItemsCount }) {
    return (
        <header>
            <h1>Carrito de compras</h1>
            <p>
                Candidad de productos <span>{cartItemsCount}</span>
            </p>
        </header>
    )
}

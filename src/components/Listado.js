import React from 'react'
import products from './data.json'
import Item from './Item'

export default function Listado({ onAddItemToCart }) {
    return (
        <div className='container'>
            {products.map((product) => (
                <Item
                    key={product.id}
                    {...product}
                    onAddItemToCart={onAddItemToCart}
                />
            ))}
        </div>
    )
}

import { useState } from 'react'
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'

function App() {
    const [cartItemsCount, setCartItemsCount] = useState(0)

    const onAddItemToCart = () => {
        setCartItemsCount((prevCartItems) => ++prevCartItems)
    }

    return (
        <div className='App'>
            <Cabecera cartItemsCount={cartItemsCount} />
            <Listado onAddItemToCart={onAddItemToCart} />
        </div>
    )
}

export default App

import { useState } from "react"

const ItemCount = ({ stock, addToCart}) => {

    const [count, setCount] = useState(1)

    const addCount = () => {
        if (count < stock) {
            setCount((prev) => prev + 1)
        }

    }
    const removeCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    }

  return (
    <div class="mt-2">
        <label class="text-gray-700 text-sm" for="count">Cantidad:</label>
        <div class="flex items-center justify-evenly my-3">
            <button class="text-gray-500 focus:outline-none focus:text-gray-600" onClick={addCount}>
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
            <span class="text-gray-700 text-lg mx-2"><input id="counter" aria-label="input" type="text" value={count} onChange={(e) => e.target.value} /></span>
            <button class="text-gray-500 focus:outline-none focus:text-gray-600" onClick={removeCount}>
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
        </div>
        <button class="flex ml-auto text-white bg-success border-0 m-12 px-5 py-3 focus:outline-none hover:bg-success-focus rounded" onClick={() => addToCart(count)}>Añadir al carrito</button>
    </div>
  )
}
export default ItemCount
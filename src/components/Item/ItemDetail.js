import { useState, useContext } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ item }) => {

    const [isInCart, setIsInCart] = useState(false)

    const addToCart = (quantity) => {
        addItem(item, quantity)
        setIsInCart(true)
    }

    const { addItem } = useContext(CartContext)


  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap content-center">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={item.img}/>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">{}</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
            <p className="mt-5">{item.description}</p>
            <div class="flex justify-center mt-12">
                <span class="title-font font-medium text-2xl text-gray-900">${item.price}</span>
            </div>
                {isInCart ? (
                            <div>
                                <Link to='/cart'><button className="btn mt-5">Finalizar compra</button></Link>
                            </div>
                        ) : (
                            <ItemCount addToCart={addToCart} stock={item.stock} />
                        )}

        </div>
    </div>
  </div>
</section>
  )
}
export default ItemDetail
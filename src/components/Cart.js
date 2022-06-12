import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemInCart from "./Item/ItemInCart"


const Cart = () => {

    const {cartItems, removeItem, clearCart, cartLenght, getSubtotal, getTotal} = useContext(CartContext)

  return (
    <>
        {cartLenght() == 0 ? (
            <div className="bg-base-200">
              <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg" alt="michi triste" src="https://i.pinimg.com/564x/6d/12/a4/6d12a4f91fd58aec347f37d9d89262f2.jpg"/>
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Aún no hay nada en tu carrito!</h1>
                    <p class="mb-8 leading-relaxed">Presiona el botón de abajo para volver al inicio.</p>
                    <div class="flex flex-col content-center items-center">
                        <Link to='/'><button class="btn btn-secondary m-5">Inicio</button></Link>
                        <a href="https://pinterest.com/search/pins/?q=michis&rs=typed&term_meta[]=michis%7Ctyped" target="_blank"><button class="btn btn-primary m-5">No, quiero mas fotos de gatitos!</button></a>
                    </div>
                </div>
                </div>
            </div>
        ) : ( 
            <>
            <div className="min-h-screen">
                <h1 className="text-3xl font-bold">Carrito de compras</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full my-12">
                        <thead>
                            <th>productos</th>
                            <th>cantidad</th>
                            <th>subtotal</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (<ItemInCart key={item.id} item={item}></ItemInCart>))}
                        </tbody>
                    </table>
                </div>
                <button onClick={clearCart} className="btn btn-error m-12">Vaciar Carrito</button>
                <div className="container mx-auto"><h2 className="text-xl m-5">Resumen de Compra</h2>
                <ul>Precio total: ${getTotal()}</ul>
                <ul>Cantidad de productos: {cartLenght()}</ul>
                </div>
                <div>
                    <Link to='/checkout'><button className="btn mt-5">Finalizar compra</button></Link>
                </div>
                </div>
            </>
         )
        }
    </>
  )
}
export default Cart
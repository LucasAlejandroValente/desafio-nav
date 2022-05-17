import { useCartContext } from "../../../context/CartContext"
import CartItem from "./CartItem"

const CartItemContainer = () => {
    const { cart } = useCartContext() 


  return (
    <div className="overflow-x-auto mx-auto">
        <table className="table w-full">

            <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
            </tr>
            </thead>
            <tbody>

            { cart.map(item => <CartItem key={item.id} producto={item} />) }

            </tbody>
        </table>
        </div>
  )
}
export default CartItemContainer
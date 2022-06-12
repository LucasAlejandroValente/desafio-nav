import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemInCart = ({item}) => {

    const {cartItems, removeItem, clearCart, cartLenght, getSubtotal, getTotal} = useContext(CartContext)

  return (
    <tr key={item.id}>
        <th><div className="flex content-center items-center"><img className="w-52 px-2" src={item.img}></img> <h2>{item.title}</h2></div></th>
        <td>{item.quantity}</td>
        <td>{getSubtotal(item.price, item.quantity)}</td>
        <td></td>
    </tr>
  )
}
export default ItemInCart
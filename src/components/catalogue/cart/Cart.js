import CartItemContainer from "./CartItemContainer"

const Cart = () => {
  return (
    <div className="pt-10">
        <div className="pt-5"><h1 className="text-3xl p-5">Carrito</h1></div>
        <CartItemContainer></CartItemContainer>
    </div>
  )
}
export default Cart
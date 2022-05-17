const CartItem = ( { producto }) => {
  return (
    <tr>
        <td>{producto.title}
            <div class="text-sm opacity-50">Eliminar Producto</div>
        </td>
        <td>{producto.quantity}</td>
        <td>{producto.price}</td>
    </tr>
  )
}
export default CartItem
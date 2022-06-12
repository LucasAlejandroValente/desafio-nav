import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { addOrder } from "../firebase/firebaseClient"

const Checkout = () => {
    const { cartItems, cartLenght, clearCart, getTotal } = useContext(CartContext)

    const [idCompra, setIdCompra] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    })

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    const orderDate = new Date().toLocaleDateString()

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    function orderHandler() {
        const order = {
            buyer,
            item: cartItems,
            price: getTotal(),
            date: orderDate,
        }
        addOrder(order).then(data => {
            setIdCompra(data)
        })
    }

    return (
        <div className="min-h-screen">
                <div className="container mx-auto"><h2 className="text-xl m-5">Resumen de Compra</h2>
                    <ul>Precio total: ${getTotal()}</ul>
                    <ul>Cantidad de productos: {cartLenght()}</ul>
                </div>


                <div className="flex flex-col justify-start items-center w-full mt-6 lg:mt-0 mb-3">

                    
                    <form className="form space-y-2">
                        <h2>Detalles del comprador</h2>
                        <input
                            className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full"}
                            id="name"
                            type="text"
                            name="name"
                            required
                            onChange={handleSubmitChange}
                            placeholder="Nombre"
                        />
                        <input
                            className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                            id="surname"
                            type="text"
                            name="surname"
                            required
                            onChange={handleSubmitChange}
                            placeholder="Apellido"
                        />
                        <input
                            className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                            id="telephone"
                            type="tel"
                            name="telephone"
                            required
                            onChange={handleSubmitChange}
                            placeholder="Teléfono"
                        />
                        <input
                            className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                            id="email"
                            type="email"
                            name="email"
                            required
                            onChange={handleSubmitChange}
                            placeholder="E-mail"
                        />
                        <input
                            className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                            id="emailConfirm"
                            type="email"
                            name="emailConfirm"
                            required
                            onChange={handleSubmitChange}
                            placeholder="Confirmar e-mail"
                        />
                    </form>

                    {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                        ? (

                            <input 
                                onClick={() => { orderHandler(); setShowModal(true) }} 
                                className=" btn btn-success m-5"
                                type="submit" 
                                value="Proceder al pago" 
                            />
                        ) : (

                            <input 
                            className="btn btn-success m-5"
                                type="submit" 
                                value="Proceder al pago" 
                                disabled 
                            />
                        )
                    }
                </div>

                <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-base shadow`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                        <h2 className="text-center md:w-9/12 lg:w-7/12">Muchas gracias por comprar con nosotros, {(buyer.name).toUpperCase()}</h2>
                        <p className="mt-6 text-center md:w-9/12 lg:w-7/12 ">Pronto te llegará un email a {buyer.email} con la información de tu compra.</p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={clearCart} className="btn">
                                Inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Checkout
import { list } from "postcss";
import { useState } from "react";
import Counter from "../../Contador";

const ItemDetail = (props) => {

    const {id, title, description, img, stock, price, condition} = props.detail;

    const [terminar, setTerminar] = useState(false)

    const onAdd = (count) => {
        setTerminar (true)
        console.log(count)
    } 

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">{title}</h1>
                        <p class="py-6">{description}</p>
                        <p class="py-6">Stock: {stock}</p>
                        <p class="py-6">Precio: ${price}</p>
                        <p class="py-6">Condición: {condition}</p>
                        <div>
                            {terminar ?
                                (<button className="btn bg-primary text-white"
                                >Terminar compra</button>)
                            : (<Counter stock= {stock} onAdd={onAdd} id={id}></Counter>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
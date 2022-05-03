import { list } from "postcss";

const ItemDetail = (props) => {

    const {id, title, description, img, stock, price, condition} = props.detail;

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
                        <button class="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
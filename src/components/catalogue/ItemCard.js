import { Link } from "react-router-dom";

const ItemCard = (props) => {

    const {id, title, description, img, stock, price} = props.item;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5">
                <figure className="lg:w-48 lg:h-48"><img className="object-cover" src={img}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <strong>${price}</strong>
                        <button className="btn btn-primary"><Link to={`/item/${id}`}>Ver</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCard
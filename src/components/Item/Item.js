import { Link } from "react-router-dom"

const Item = ({item}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-12" key={item.id}>
        <figure><img src={item.img} alt={item.title} className="object-cover w-96 h-96"/></figure>
        <div className="card-body justify-between">
            <h2 className="card-title justify-center">{item.title}</h2>
            <div className="card-actions justify-end">
                <button className="btn btn-secondary">${item.price}</button>
                <button className="btn btn-primary"><Link to={"/item/" + item.id}>VER DETALLES</Link></button>
            </div>
        </div>
    </div>
  )
}
export default Item
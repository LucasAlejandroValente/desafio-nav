const ItemCard = ({props}) => {

    const {id, title, description, img, stock, price} = props.item
  return (
    <div>
        <div ClassName="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img}/></figure>
            <div ClassName="card-body">
                <h2 ClassName="card-title">{title}</h2>
                <p>{description}</p>
                <div ClassName="card-actions justify-end">
                    <button ClassName="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ItemCard
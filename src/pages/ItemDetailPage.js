
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getItemsById } from "../firebase/firebaseClient"
import Loader from "../components/Loader"
import ItemDetail from "../components/Item/ItemDetail"

const ItemDetailPage = () => {

    const { itemId } = useParams()

    const [item, setItems] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        getItemsById(itemId).then((data) => {
            setItems(data)
            setLoader(false)
        })
    }, [])

   
    return (
        <>
            {loader
                ? <Loader/>
                : (<ItemDetail key={item.id} item={item}></ItemDetail>)
            }
        </>
    )
}

export default ItemDetailPage
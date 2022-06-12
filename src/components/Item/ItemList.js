import { useEffect, useState} from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/firebaseClient'
import { useParams } from 'react-router-dom'
import Item from './Item';
import Loader from '../Loader';

const ItemList = () => {


    const {categoryId} = useParams()

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(false)
    

    useEffect(() => {

      const getItems = async () => {
        setLoader(true)

        const Productos = categoryId ? query(collection(db, "items"), where("category", "==", categoryId)) : collection(db, "items")
        const querySnapshot = await getDocs(Productos)

        setItems(
            querySnapshot.docs.map((item) => {
                return { ...item.data(), id: item.id }
            })
        )
        setLoader(false)
      }
      getItems()
    }, [categoryId])

        return (
            <div>
                {loader ? <Loader/> : (
                    <div className="mx-auto bg-base py-24">
                        <h2 className="text-3xl font-black tracking-wide">PRODUCTOS</h2>
                        <span class="inline-block h-1 w-24 rounded bg-neutral mt-6 mb-4"></span>
                        <div className='flex flex-row flex-wrap justify-center'>
                            {items.map((item) => (<Item key={item.id} item={item} category={categoryId}></Item>))}
                        </div>                  
                    </div>
                    )
                }
            </div>
        )
}
export default ItemList
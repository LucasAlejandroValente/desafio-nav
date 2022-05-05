import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemData } from "../../../data/itemData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})

    const {itemId} = useParams();

    useEffect(() => {
        const getItemsPromise = new Promise((res,rej) => {
            setTimeout(() => {
                res(itemData.find(item => item.id == itemId));
            }, 2000);
         });
  
         getItemsPromise.then( data => {
             setDetail(data)
         });
    }, [itemId]);
    
  return (
    <div>
    {<ItemDetail key={detail.id} detail={detail}/>}
    </div>
  )
}
export default ItemDetailContainer
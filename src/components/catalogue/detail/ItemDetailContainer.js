import { useEffect, useState } from "react";
import { itemData } from "../../../data/itemData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])

    useEffect(() => {
      getItems()
    }, []);

    const getItems = () => {
        const getItemsPromise = new Promise((res,rej) => {
            setTimeout(() => {
                res(itemData);
            }, 2000);
         });

         getItemsPromise.then( data => {
             setDetail(data)
         });

    };
    
  return (
    <div>
    {detail.map(d => <ItemDetail key={d.id} detail={d}/>)}
    </div>
  )
}
export default ItemDetailContainer
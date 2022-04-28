import { useEffect, useState } from "react";
import { itemData } from "../../data/ItemData";
import ItemCard from "./ItemCard";

const ItemList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {

    }, []);

    const getItems = () => {
        const getItemsPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(itemData);
            }, 2000);
         });

         getItemsPromise.then( data => {
             setItems(data)

         })

    };
    
    return (
        <div>
            {items.map(m => <ItemCard key={m.id} item={m}/>)}
        </div>
  )
}
export default ItemList
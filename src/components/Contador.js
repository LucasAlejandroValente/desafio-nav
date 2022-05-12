import { React, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useCartContext } from '../context/CartContext';


const Counter = ({stock, onAdd, id}) => {
    const [counter, setCounter] = useState(0);

    const {addToCart} = useCartContext()
    const {items} = useAppContext()


    const increaseCounter = () => {
        if (counter + 1 <= stock) {
            setCounter(counter + 1)
        }
    };

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        };
    };

    const handleClick = (id, quantity) => {
        const findItem = items.find((item) => item.id === id)

        if (!findItem){
            alert("error")
            return
        }

        addToCart(findItem, quantity)
    }

    return  (
        <div className='counter container-sm block border m-5 p-5'>
            <span>{counter}</span>
            <div className='btn_container flex justify-center'>
                <button className='item_btn border-solid border-2 w-8 m-8' onClick={increaseCounter}>+</button>
                <button className='item_btn border-solid border-2 w-8 m-8' onClick={decreaseCounter}>-</button>
            </div>
            <div>
                <button className='btn bg-primary' onClick={()=> handleClick(id, counter)}>Agregar al carrito</button>
            </div>

        </div>

    );
};

export default Counter
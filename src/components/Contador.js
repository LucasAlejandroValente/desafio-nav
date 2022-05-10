import { React, useState } from 'react';

const Counter = ({stock, onAdd, initial}) => {
    const [counter, setCounter] = useState(0);

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

    return  (
        <div className='counter container-sm block border m-5 p-5'>
            <span>{counter}</span>
            <div className='btn_container flex justify-center'>
                <button className='item_btn border-solid border-2 w-8 m-8' onClick={increaseCounter}>+</button>
                <button className='item_btn border-solid border-2 w-8 m-8' onClick={decreaseCounter}>-</button>
            </div>
            <div>
                <button className='btn bg-primary' onClick={()=> onAdd(counter)}>Agregar al carrito</button>
            </div>

        </div>

    );
};

export default Counter
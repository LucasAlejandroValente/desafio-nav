import { React, useState } from 'react';

const ItemListContainer = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(count => count + 1)
    };

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        };
    };

    return  (
        <div className='counter container-lg block'>
            <h1 className='text-3xl m-8'>Contador</h1>
            <span>{counter}</span>
            <div className='btn_container flex justify-center'>
                <button className='item_btn border-solid border-2 w-8 m-8' onClick={increaseCounter}>+</button>
                <button className='item_btn border-solid border-2 w-8 m-8' onClick={decreaseCounter}>-</button>
            </div>

        </div>

    );
};

export default ItemListContainer
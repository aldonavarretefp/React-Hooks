import React, { useState,useCallback } from 'react'

import ShowIncrement from './ShowIncrement';

const CallBack = () => {
    const [counter, setCounter] = useState(0);

    const increment = useCallback((value) => {
        setCounter((c) => c + value);
    },[setCounter]);

    return (
        <div className='container-fluid'>
            <p className='display-3 text-left m-5'>Memorize <code>(useCallBack)</code></p>  
            <h1>Counter: <small>{counter}</small></h1>
            <ShowIncrement increment = {increment}/>
        </div>
    )
}

export default CallBack

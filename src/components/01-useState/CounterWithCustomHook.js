import React from 'react'
import { useCounter } from '../../hooks/useCounter';

const CounterWithCustomHook = () => {

    const { state:count, increment, decrement, reset } = useCounter(10);
    return (
        <>
            <div className="row">
                <div className="col">
                    <p className="display-5">CounterWithCustomHook</p>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <p className="display-4">{count}</p>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <button className ="btn btn-primary m-2" onClick={increment}>+1</button>
                    <button className ="btn btn-warning m-2" onClick={reset}>Reset</button>
                    <button className ="btn btn-danger m-2" onClick={decrement}>-1</button>
                </div>
            </div>
        </>
    )
}

export default CounterWithCustomHook

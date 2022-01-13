import React,{useState}from 'react'
import { Small } from './Small';
import { useCounter } from '../../hooks/useCounter';

export const Memorize = () => {

    const { state:counter, increment}= useCounter(0);
    const [show, setShow] = useState(true);

    return (
        <div className='container-fluid'>
            <p className='display-3 text-left m-5'>Memorize <code>(memo)</code></p>  
            <h1>Counter: <Small value={counter}/></h1>
            <button className='btn btn-outline-primary' onClick={increment}>
                +1
            </button>
            <button className='btn btn-warning m-2' onClick={()=>setShow(!show)}>
                Show/Hide {show ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

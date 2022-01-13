import React,{useMemo, useState} from 'react'
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {
    
    const { state:counter, increment}= useCounter(10000);
    const [show, setShow] = useState(true);

    const hardTask = (iterations) => {
        let i = 0;
        while(i < iterations){
            i++;
        }
        console.log('hard task finished',iterations);
        return `${iterations} iterations done!`;
    }

    const hardWorkMemo = useMemo(() => hardTask(counter), [counter]);

    
    return (
        <div className='container-fluid'>
            <p className='display-3 text-left m-5'>Memorize <code>(useMemo)</code></p>  
            <h1>Counter: <small>{counter}</small></h1>
            <pre>{hardWorkMemo}</pre>
            <button className='btn btn-outline-primary' onClick={increment}>
                +1
            </button>
            <button className='btn btn-warning m-2' onClick={()=>setShow(!show)}>
                Show/Hide {show ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

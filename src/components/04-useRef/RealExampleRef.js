import React,{useState,useRef,useEffect} from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);
    
    return (
        <div>
            <p className='display-3 text-left m-5'>Real Example<code>(useRef)</code></p>  
            <hr></hr>
            {show && <MultipleCustomHooks/>}
            <button className="btn btn-primary m-2" onClick={()=>setShow(!show)}>Show/Hide</button>
        </div>
    )
}

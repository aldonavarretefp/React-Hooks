import React,{useRef} from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    return (
        <div className='container-fluid mt-3'>
            <p className='display-3 text-left m-5'>Focus Screen<code>(useRef)</code></p>  

            <input ref={inputRef}type="text" className="form-control form-control-lg mb-2" placeholder='Your Name' />
            <input type="text" className="form-control form-control-lg mb-2" placeholder='Your Address' />
            <input type="text" className="form-control form-control-lg mb-2" placeholder='Your Email' />
            <input type="text" className="form-control form-control-lg mb-2" placeholder='Your State' />
            <input type="text" className="form-control form-control-lg mb-2" placeholder='Your Country' />
            <button 
                className="btn btn-outline-primary text-right mt-1"
                onClick={() => inputRef.current.select()}    
            >Focus on Name</button>
        </div>
    )
}

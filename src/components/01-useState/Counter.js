import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Counter = props => {
    const [state, setState] = useState({
        counter1: 0,
        counter2: 0
    })
    const { counter1, counter2 } = state;
    return (
        <>
            <h1 className="display-2 text-left m-5">useState</h1>
            <hr></hr>
            <div className="row">
                <div className="col-3">
                    <p className='text-primary display-5'>Counter 1: {counter1}</p>    
                </div>
                <div className="col">
                    <button className='btn btn-primary m-2 px-4' onClick={(e)=> setState({
                            ...state,
                            counter1: counter1 + 1
                    })}>+1</button> 
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <p className='text-danger display-5'>Counter 2: {counter2}</p>  
                </div>
                <div className="col-6">
                    <button className='btn btn-danger m-2 px-4' onClick={(e)=> setState({
                            ...state,
                            counter2: counter2 + 1
                    })}>+1</button> 
                </div>
            </div>
            
        </>
    )
}

Counter.propTypes = {

}

export default Counter

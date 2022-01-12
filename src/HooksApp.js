import React from 'react'
import Counter from './components/01-useState/Counter';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';


const HooksApp = () => {
    return (
        <div>
            <p className='display-1 text-center m-5'>HooksApp</p>
            <Counter/>
            <CounterWithCustomHook/>

            {/* useEffect */}
            <SimpleForm/>
        </div>
    )
}

export default HooksApp

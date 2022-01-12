import React from 'react'
import Counter from './components/01-useState/Counter';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';


const HooksApp = () => {
    return (
        <div>
            <p className='display-1 text-center m-5'>HooksApp</p>
            <Counter/>
            <CounterWithCustomHook/>

            {/* useEffect */}
            <SimpleForm/>
            <FormWithCustomHook/>
            <MultipleCustomHooks/>
            <FocusScreen/>
            <RealExampleRef/>
        </div>
    )
}

export default HooksApp

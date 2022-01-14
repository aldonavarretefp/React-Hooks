import React from 'react'
import Counter from './components/01-useState/Counter';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout';
import { MemoHook } from './components/06-memos/MemoHook';
import { Memorize } from './components/06-memos/Memorize';
import CallBack from './components/06-memos/CallBack';
import { Padre } from './components/07-tarea-memo/Padre';
import TodoApp from './components/08-useReducer/TodoApp';


const HooksApp = () => {
    return (
        <div>
            <p className='display-1 text-center m-5'>HooksApp</p>
            <Counter/>
            <CounterWithCustomHook/>
            {/* useEffect */}
            <SimpleForm/>
            {/* useFetch */}
            <FormWithCustomHook/>
            <MultipleCustomHooks/>
            {/* useRef */}
            <FocusScreen/>
            <RealExampleRef/>
            {/* useLayoutEffect */}
            <Layout/>
            {/* memo */}
            <Memorize/>
            {/* useMemo */}
            <MemoHook/>
            {/* useCallBack */}
            <CallBack/>
            {/* Tarea */}
            <Padre/>

            
            <TodoApp/>


        </div>
    )
}

export default HooksApp

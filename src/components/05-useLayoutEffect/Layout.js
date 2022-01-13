import React,{useLayoutEffect,useRef,useState} from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';



import ReactLoading from 'react-loading';

export const Layout = () => {

    const {state:counter,increment} = useCounter(1);
    const [boxSize, setBoxSize] = useState({});
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { data, loading} = state;
    
    const { quote,author } = !!data && data[0];

    
    const pTag = useRef();
    useLayoutEffect(() => {
        setBoxSize(pTag.current?.getBoundingClientRect());
    }, [quote]);

    return (
        <div className='container-fluid'>
            <p className='display-3 text-left m-5'>Breaking Bad Quotes <code>(useLayoutEffect)</code></p>  
            <hr></hr>    

            {loading ? <div className="d-flex justify-content-center align-items-center ">
                            <ReactLoading type={'spin'} color={'black'} height={50} width={50} />
                        </div>
            : 
            <blockquote className="blockquote text-center">
                <p ref={pTag} className="mb-3 fs-2">{quote}</p>
            </blockquote>
            }
            <pre>
                {JSON.stringify(boxSize,null,2)}
            </pre>
            <button className="btn btn-outline-primary text-right mt-1" onClick={increment}>Next Quote</button>


        </div>
    )
}

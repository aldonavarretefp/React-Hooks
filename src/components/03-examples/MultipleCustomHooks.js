import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';



import ReactLoading from 'react-loading';

export const MultipleCustomHooks = () => {

    const {state:counter,increment} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { data, loading} = state;
    
    const { quote,author } = !!data && data[0];
    // console.log(data);
    // console.log(loading);

    return (
        <div className='container'>
            <p className='display-3 text-left m-5'>Breaking Bad Quotes <code>(useFetch)</code></p>  
            <hr></hr>    

            {loading ? <div className="d-flex justify-content-center align-items-center ">
                            <ReactLoading type={'spin'} color={'black'} height={50} width={50} />
                        </div>
            : 
            <blockquote className="blockquote text-center">
                <p className="mb-3 fs-2">{quote}</p>
                <footer className="blockquote-footer"><cite title={author}>{author}</cite></footer>
            </blockquote>
            }
            <button className="btn btn-outline-primary text-right mt-1" onClick={increment}>Next Quote</button>


        </div>
    )
}

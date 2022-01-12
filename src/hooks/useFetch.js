import {useState,useEffect,useRef} from 'react'


export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});
    
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({...state, loading: true, error: null});
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(isMounted.current){
                setState({...state, data, loading: false});
            }else{
                console.log("setState not called");
            }
        });
    }, [url]);

    return state;
}

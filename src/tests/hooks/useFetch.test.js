
import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

const url = `https://www.breakingbadapi.com/api/quotes/${1}`;

describe("Pruebas en el useFetch",()=>{

    test('debe de retornar los valores por defecto:',() => { 
        const {result,waitForNextUpdate} = renderHook(() => useFetch(url));
        const {data,loading,error} = result.current;
        expect(data).toBeNull();
        expect(loading).toBe(true);
        expect(error).toBeNull();

    });
    test('debe retornar la data de length 1,loading:false,error:null',async()=>{
        const {result,waitForNextUpdate} = renderHook(()=>useFetch(url));
        await waitForNextUpdate();  
        const {data,loading,error} = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBeNull();
    });
    test('Debe de manejar el error',async()=>{
        const {result,waitForNextUpdate} = renderHook(()=>useFetch("https://reqres.in/apiADJNOSANDIASN/users"));
        await waitForNextUpdate();  
        const {data,loading,error} = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe("Can not fetch data");
    });
}); 
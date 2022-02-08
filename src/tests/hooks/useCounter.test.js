import { React } from 'react';
import { renderHook,act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';
describe('Pruebas en useCounter',()=>{
    test('debe de retornar valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        const {state:counter,increment,decrement,reset} = result.current;
        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
    }); 
    test('debe de tener el counter con el valor que se manda', () => {
        const valor = 100;
        const {result} = renderHook(() => useCounter(valor));
        const {state:counter} = result.current;
        expect(counter).toBe(100);
    });
    test('debe de incrementar el counter +1', () => {
        const valor = 100;
        const valorIncrementado = 101;
        const {result} = renderHook(() => useCounter(valor));
        const {increment} = result.current;
        act(() => {
            increment();
        });
        const {state:counter} = result.current;
        expect(counter).toBe(valorIncrementado);
    });
    
    test('debe decrementar el contador', () => {
        const valor = 100;
        const valorDecrementado = 99;
        const {result} = renderHook(() => useCounter(valor));
        const {decrement} = result.current;
        act(() => {
            decrement();
        });
        const {state:counter} = result.current;
        expect(counter).toBe(valorDecrementado);
    });
    
    test('debe hacer reset del contador', () => {
        const valor = 100;

        const {result} = renderHook(() => useCounter(valor));
        console.log(result.current);
        const {decrement,reset} = result.current;
        act(() => {
            decrement();
            reset();
        });
        const {state:counter} = result.current;
        expect(counter).toBe(100);
    });
    
    
    
})
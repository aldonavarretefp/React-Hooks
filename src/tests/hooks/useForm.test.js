import { renderHook,act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm',()=>{
    const initialForm = {
        name: 'Aldo',
        email: 'aaldiitoo@gmail.com',
    }
    test('debe de regresar un formulario', ()=>{
        const {result} = renderHook(()=>useForm(initialForm));
        //regresa un objeto y dos funciones
        const [form,handleInputChange,reset] = result.current;

        expect(form).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    test('debe de cambiar el valor del formulario (name)',()=>{
        const nuevoNombre = 'Aldito';
        const {result} = renderHook(()=>useForm(initialForm));
        const [,handleInputChange] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:"name",
                    value: nuevoNombre
                }
            })
        });
        const [form] = result.current;
        const {name} = form;
        expect(name).toBe(nuevoNombre);
    });
    test('debe de resetear el formulario con RESET',()=>{
        const {result} = renderHook(()=>useForm(initialForm));
        const [,handleInputChange,reset] = result.current;
        const nuevoUsuario = {
            name: 'Naza',
            email: 'nazamaldoyael@gmail.com'
        };
        act(()=>{
            handleInputChange({
                target:{
                    name:"name",
                    value: nuevoUsuario.name
                }
            })
            reset();
        });
        const [form] = result.current;
        expect(form).toEqual(initialForm);
    });
});
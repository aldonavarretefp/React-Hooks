import React from 'react'
import { useForm } from '../../hooks/useForm';

const AddToDo = ({handleAddToDo}) => {

    const [ {desc}, handleInputChange,reset] = useForm({desc: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        if(desc.trim() === '' || desc.length < 4) return;
        const newTodo = {
            id: new Date().getTime(),
            desc: e.target.desc.value,
            done: false
        };
        handleAddToDo(newTodo);
        reset();
    }
    return (
        <>
            <h1>Add To Do</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input type="text" name="desc" value={desc} autoComplete='off' onChange={handleInputChange} className="form-control" placeholder="Add To Do" />
                <button type="submit" className="button btn btn-outline-primary mt-2 col-8">Add</button>
            </form>    
        </>
    )
}

export default AddToDo

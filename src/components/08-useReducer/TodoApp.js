import React, { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer';
import AddToDo from './AddToDo';
import TodoList from './TodoList';

import './styles.css'
const TodoApp = () => {

    const init = ()=>{
        return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    }
    const [todos,dispatch] = useReducer(todoReducer, [], init);
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleDel = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                id
            }
        });
    }

    const handleToogle = (id) => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: {
                id
            }
        });
    }


    const handleAddToDo = (newToDo) => {
        dispatch({
            type: 'ADD_TODO',
            payload: newToDo
        });
    }

    return (
        <div className='container text-center'>
            <h1 className='display-2'>TodoApp<code> ({todos.length})</code></h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList handleDel={handleDel} handleToogle={handleToogle} todos={todos}/>
                </div>
                <div className="col-5 addToDo text-center">
                    <AddToDo handleAddToDo={handleAddToDo}/>
                </div>
            </div>

        </div>
    )
}

export default TodoApp

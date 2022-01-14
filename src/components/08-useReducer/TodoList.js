import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todos,handleDel,handleToogle}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map(todo => (
                    <TodoListItem key={todo.id} todo={todo} handleDel={handleDel} handleToogle={handleToogle}/>
                ))
            }
        </ul>
    )
}

export default TodoList

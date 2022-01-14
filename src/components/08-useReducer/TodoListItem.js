import React from 'react'

const TodoListItem = ({todo,handleDel,handleToogle}) => {
    return (
        <div className="row">
            <li className='list-group-item '>
                    <div className={`col-6 display-6 ${todo.done && 'complete'}`} >{todo.desc}</div>
                    <div className="col-6 btnContainer">
                        <button className="btn btn-danger" onClick={()=>handleDel(todo.id)}>Delete</button>
                        <button className="btn btn-success" onClick={()=>handleToogle(todo.id)}>Done!</button>
                    </div>
            </li>
        </div>
    )
}

export default TodoListItem

export const todoReducer = (todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todos, {
                id: new Date().getTime(),
                desc: action.payload.desc,
                done: false
            }];
        case 'TOGGLE_TODO':
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            });
        case 'REMOVE_TODO':
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}
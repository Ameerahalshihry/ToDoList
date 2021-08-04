export const addTodo = todo =>({
    type:'ADD',
    payload: todo
})
export const deleteTodo = key =>({
    type:'DELETE',
    payload: key
})
export const editTodo = key => ({
    type:'EDIT',
    payload: key
})
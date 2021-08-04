const initialState ={
    todos:[]
}

export const addTodo =(state=initialState, action) =>{
    switch(action.type){
        case 'ADD':
            return {...state, todos:state.todos.concat(action.payload)}
        case 'DELETE':
            return {...state, todos:state.todos.filter((todo,index)=> index !== action.payload)}
        default:
            return state
    }
}
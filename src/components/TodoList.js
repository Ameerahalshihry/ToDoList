import React from 'react';
import {connect} from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = ({todos} ) => {
    return (
        <div>
            {todos.map((todo,index)=>(
                <TodoItem todo={todo} key={index} id={index}/>
            ))
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    todos: state.todos
})
export default connect(mapStateToProps)(TodoList)
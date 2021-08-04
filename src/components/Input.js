import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../redux/actions/addTodo.action';
import TodoList from './TodoList';

class Input extends React.Component{
    constructor(){
        super()
        this.state={todo: ''}
    }
    handleChange = (event) => {
        this.setState({todo: event.target.value})
    }
    handleAddToDo = (event) => {
        this.props.add(this.state.todo)
        this.setState({todo:''})
    }
    render(){
        return (
            <div className="card">
                <h5 className="card-header">Create A ToDo</h5>
                <div className="card-body">
                    <h5 className="card-title">What is your ToDo List?</h5>
                    <input className="form-control mb-3" placeholder=" Enter a ToDo .." type="text" name="todo" id="todo" value={this.state.todo} onChange={this.handleChange} />
                    <input className='btn btn-secondary ' type="button" value="ADD ToDo" onClick={this.handleAddToDo }/>
                </div>
                <TodoList />
            </div>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    add:(todo) => dispatch(addTodo(todo))
})

export default connect (null,mapDispatchToProps)(Input)
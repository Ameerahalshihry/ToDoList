import React from 'react';
import {connect} from 'react-redux'
import { deleteTodo } from '../redux/actions/addTodo.action';
import '../css/checkBox.css';

const TodoItem = ({todo, id, deleteItem}) => {
    return (
        <div className="card m-4 w-75" >
            <div className="card-body">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <h5 className="card-title">{todo}</h5>
                </div>
                <hr />
                <input className='btn btn-outline-success m-2' type="button" value="Edit"/>
                <input className='btn btn-outline-danger' type="button" value="Delete" onClick={()=> deleteItem(id)}/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: key => dispatch(deleteTodo(key))
})

export default connect(null, mapDispatchToProps)(TodoItem)
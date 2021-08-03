import React, { Component } from 'react';

class TodoItem extends Component {
    
    render() {
        return (
            <div class="card m-4 w-75">
                <div class="card-body">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" id="" />
                    <h5 class="card-title">{this.props.name}</h5>
                </div>
                    <hr />
                    <input className='btn btn-outline-success m-2' type="button" value="Edit" onClick={this.handleAddToDo}/>
                    <input className='btn btn-outline-danger' type="button" value="Delete" onClick={this.handleAddToDo}/>
                </div>
            </div>
        );
    }
}

export default TodoItem;
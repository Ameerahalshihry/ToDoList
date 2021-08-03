import React from 'react'

class Input extends React.Component{
    constructor(){
        super()
        this.state={input: ''}
    }
    handleChange = (event) => {
        this.setState({input: event.target.value})
        console.log(this.state);
    }

    handleAddToDo = () => {
        console.log(this.state);
    }
    render(){
        return (
            <div class="card">
                <h5 class="card-header">Create A ToDo</h5>
                <div class="card-body">
                    <h5 class="card-title">What is your ToDo List?</h5>
                    <input className="form-control mb-3" placeholder=" Add a ToDo" type="text" name="todo" id="todo" onChange={this.handleChange} />
                    <input className='btn btn-primary' type="button" value="ADD ToDo" onClick={this.handleAddToDo}/>
                </div>
            </div>
        )
    }
    
}

export default Input

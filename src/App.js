import './App.css';
import { connect } from 'react-redux'
import Input from './components/Input';
import React, { Component } from 'react';
import TodoItem from './components/TodoItem';

class App extends Component {
  render() {
    // const myList = this.props.myToDoList.map(item =>{
    //   return console.log(item);
    // })
    return (
      <div className="container mt-5">
        {
          this.props.myToDoList.map(item =>{
            return (
              <TodoItem
              name = {item.name}
              checked ={item.checked}
              id = {item.id}
              />
            )
          })
        }
        <hr></hr>
      <Input></Input>
      </div>
    ); 
  }
}

const mapStateToProps = (state) => {
  return{
    myToDoList:state.todoList
  }
}
const mapDispatchToProps = (dispatch) => {
  return{

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
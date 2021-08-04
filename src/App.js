import './css/App.css';
import Input from './components/Input';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Input/>
      </div>
    ); 
  }
}
export default App
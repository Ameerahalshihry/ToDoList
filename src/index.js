import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//setup redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {addTodo} from './redux/reducers/addTodo.reducer'
const myStore = createStore(addTodo)

ReactDOM.render(
  <Provider store={myStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

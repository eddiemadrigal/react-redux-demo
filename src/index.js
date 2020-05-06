import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';

function productsReducer(state = [], action) {
  return state;
}

function userReducer(state = '', action) {
  return state;
}

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(allReducers, {
  products: [{ name: "iPhone"}],
  user: "Erika"
});

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

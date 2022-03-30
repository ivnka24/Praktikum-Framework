import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import MainReducer from './reducers/MainReducer'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './containers/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>
  f)(createStore)(MainReducer)


ReactDOM.render(
  <Provider store = {store}>
    <Table/>
  </Provider>, 
document.getElementById('root')
);

reportWebVitals();

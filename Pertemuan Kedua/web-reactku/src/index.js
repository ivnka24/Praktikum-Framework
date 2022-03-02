import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

const Hello = () =>{
  return <p>Hello Vanka</p>
}

//react di render (<App />, document.getElementById('root'));

ReactDOM.render(<Hello />, document.getElementById('root'));

//react di render untuk menampilkan hello


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ServiceWorker.unregister();

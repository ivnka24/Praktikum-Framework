import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
// import Mahasiswa from "./container/Mahasiswa/Mahasiswa"
import reportWebVitals from './reportWebVitals';
import BlogPost from "./container/BlogPost/BlogPost";

ReactDOM.render(
  <BlogPost />,
  // <Mahasiswa />,
  document.getElementById('content')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

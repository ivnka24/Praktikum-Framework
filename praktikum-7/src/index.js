import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomFormDemo from './CustomForm/CustomFormDemo';
import LoaderDemo from './LoadDemo/LoaderDemo';
import GenericContainerDemo from './GenericContainer/GenericContainerDemo';
import RequireAuthDemo from './ProtectedRoutes/RequireAuthDemo';
import RefsDemo from './RefsDemo/RefsDemo';

ReactDOM.render(
  // <CustomFormDemo/>,
  // <LoaderDemo/>,
  // <GenericContainerDemo/>,
  // <RequireAuthDemo/>,
  <RefsDemo/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WheaterInfo from './component/weatherInfo'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <WheaterInfo />
  </React.StrictMode>,
  document.getElementById('llamada')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componenet/Header'
import Count from './componenet/Count'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Count></Count>
  </React.StrictMode>
);



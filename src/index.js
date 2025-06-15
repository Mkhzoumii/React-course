import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../src/compnent/Header.jsx'; 
import Counter from '../src/compnent/Counter.jsx'; 
import MoviePage from './compnent/MoviePage.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <div className='p-2 m-2 row text-center'>
  <Counter/>
  <MoviePage/>
  </div>
  </>
);


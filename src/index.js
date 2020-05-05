import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import MovieState from './context/movie/MovieState';

const App0 = () => {
  return (
    <MovieState>
      <App />
    </MovieState>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App0 />
  </React.StrictMode>,
  document.getElementById('root')
);

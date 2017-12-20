import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  console.log('I here');
  const root = document.getElementById('root');
  window.store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});

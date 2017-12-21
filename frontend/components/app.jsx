import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import { connect } from 'react-redux';
import BigVideo from './youtube/big_video';

const App = () => {
  return (
    <div className="grandparent">
      Frequency2
        <BigVideo />
    </div>
  );
};

export default App;

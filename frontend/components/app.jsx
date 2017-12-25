import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import { connect } from 'react-redux';
import Framework from './youtube/framework';

const App = () => {
  return (
    <div className="all">
      
        <div className="nav-bar">
          Frequency2
        </div>

        <Framework />
    </div>
  );
};

export default App;

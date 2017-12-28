import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import { connect } from 'react-redux';
import Foundation from './holders/foundation';

const App = () => {
  console.log("in app");
  return (
    <div className="all">

        <div className="nav-bar">
          Frequency2
        </div>

        <Foundation />
    </div>
  );
};

export default App;

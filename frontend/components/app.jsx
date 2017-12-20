import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div className="grandparent">
        Hello friend
    </div>
  );
};

export default App;

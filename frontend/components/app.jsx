import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import { connect } from 'react-redux';
import Video from './youtube/video';

const App = () => {
  return (
    <div className="grandparent">
        Hello friend
        <Video />
    </div>
  );
};

export default App;

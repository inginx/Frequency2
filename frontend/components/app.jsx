import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import { connect } from 'react-redux';
import BigVideo from './youtube/big_video';
import Framework from './youtube/framework';

const App = () => {
  return (
    <div>
      Frequency2
        <Framework />
    </div>
  );
};

export default App;

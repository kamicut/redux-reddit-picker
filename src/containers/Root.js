import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducer';
import App from './App';

/** INITIAL STATE **/
var initialState = {
  pickeroptions: ['reactjs', 'frontend', 'programming'],
  selectedReddit: 'reactjs',
  posts: []
};

/** STORE **/
const loggerMiddleware = createLogger();

const store = applyMiddleware(
  thunkMiddleWare,
  loggerMiddleware
)(createStore)(reducer);

store.dispatch({
  'type': 'SET_STATE',
  initialState
});

/** ROOT OBJECT **/
export default React.createClass({
  render: function () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import reducer from './store/reducers/index'
import { createStore } from 'redux';
import ToDo from './Todo/ToDo';

const store = createStore(reducer);
const app = (
  <Provider store={store}>
      <ToDo />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));



import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Page from './containers/pages'
import './style/main.css'
import configureStore from './redux/store/configure-store'

const store = configureStore()

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
)

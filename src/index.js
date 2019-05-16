import './index.css';
import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';
import state from './state';
import theme from './lib/theme';
import App from './pages/app';
import Login from './pages/login';

const store = createStore(
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);

serviceWorker.register();

render(
  (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Route path="/" exact component={App} />
          <Route path="/login" component={Login} />
        </Router>
      </MuiThemeProvider>
    </Provider>
  ), document.getElementById('root'),
);

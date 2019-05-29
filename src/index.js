import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom' // do I need this?
import './index.css';
import App from './components/app';
import store from './store';
import * as serviceWorker from './serviceWorker';

// import {ConnectedRouter} from './connected-react-router';
// import configureStore, { history } from './configureStore'

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
    
//   </Provider>, 
//   document.getElementById('root')
// );

// using BrowserRouter
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

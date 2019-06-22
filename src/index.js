import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom' // do I need this?
import './index.css';
import App from './components/app';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
    
  </Provider>, 
  document.getElementById('root')
);

// attempted  to use connected-react-router library but not working

// import {ConnectedRouter} from 'connected-react-router';
// import  { history } from './configureStore'

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
    
//   </Provider>, 
//   document.getElementById('root')
// );

// // using BrowserRouter


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from './reducer';
const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
  redcers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)

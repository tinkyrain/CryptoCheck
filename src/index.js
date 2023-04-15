import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

let defaultState = {
  Bitcoin: 0,
  Cardano: 0,
  Dogecoin: 0,
  Ethereum: 0,
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD_PRICE_BITCOIN':
      return {...state, Bitcoin: state.Bitcoin = action.priceChange}

    case 'ADD_PRICE_CARDANO':
      return {...state, Cardano: state.Cardano = action.priceChange}

    case 'ADD_PRICE_DOGECOIN':
      return {...state, Dogecoin: state.Dogecoin = action.priceChange}

    case 'ADD_PRICE_ETHEREUM':
      return {...state, Ethereum: state.Ethereum = action.priceChange}

    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);


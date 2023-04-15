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
    case 'ADD_PRICE':
      return {...state, 
              Bitcoin: state.Bitcoin = action.priceBTC, 
              Cardano: state.Cardano = action.priceCAR,
              Dogecoin: state.Dogecoin = action.priceDOGE,
              Ethereum: state.Ethereum = action.priceETH
      }

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


import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux/index';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer,
});

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);
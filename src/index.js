import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import Dome from './components/dome';
import './scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dome />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {CssBaseline} from "@mui/material";
import {Provider} from 'react-redux';
import App from './App';
import store from './store';

import 'mapbox-gl/dist/mapbox-gl.css';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

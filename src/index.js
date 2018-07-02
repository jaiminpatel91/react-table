import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Card from "./components/Card";

ReactDOM.render(
  <Provider>
   <Card/>
  </Provider>
  , document.getElementById('root'),
);

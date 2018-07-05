import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Card from "./components/Card";

const defaultStyle = {
    border: '1px solid black',
};

const tableHeader = ['index', 'fname', 'lname', 'address', 'age'];

const tableData = [ {index: 'one', fname: 'one2', lname: 'one3', age: '23'},
    {index: 'two', fname: 'two2', lname: 'two3', age: '28'},
    {index: 'three', fname: 'three2', lname: 'three3', address: '131 lake'}];

ReactDOM.render(
  <Provider>
   <Card tableStyle={defaultStyle} data={tableData} headerList={tableHeader} />
  </Provider>
  , document.getElementById('root'),
);

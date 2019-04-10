import React from 'react';
import ReactDOM from 'react-dom';
import{ Provider } from 'react-redux'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import store from './store'
import Router from './router'


//import Router from './router';
//import TodoList from './component/Todolist'
//import Logoin from './component/Logoin'
//




ReactDOM.render(
    <Provider store ={store}>
        <Router />       
    </Provider> 
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


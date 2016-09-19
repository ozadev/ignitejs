import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { default as thunk } from 'redux-thunk';
import {Router, Route, IndexRoute, hashHistory, Redirect} from 'react-router';

import App from './containers/app.jsx';
import Home from './containers/home.jsx';
import Edit from './containers/edit.jsx';
import About from './containers/about.jsx';

import todoListReducer from './reducers/todoListReducer';


const middleware = applyMiddleware(thunk);
const store = createStore(todoListReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('main')
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path="edit" component={Edit} />
                <Route path="about" component={About} />
                <Redirect from="*" to="/" />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('main')
);

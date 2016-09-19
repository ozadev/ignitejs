import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';

import App from './containers/app.jsx';

import showReducer from './reducers/showReducer';
import usersReducer from './reducers/usersReducer';

const reducers = combineReducers({
    show: showReducer,
    users: usersReducer
});

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('main')
);

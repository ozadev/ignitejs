import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';

import App from './containers/app.jsx';

import todoListReducer from './reducers/todoListReducer';

const middleware = applyMiddleware(thunk);
const store = createStore(todoListReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('main')
);

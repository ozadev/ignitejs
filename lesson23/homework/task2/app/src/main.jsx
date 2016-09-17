import React from 'react';
import ReactDOM from 'react-dom';

import Users from './users.jsx'

let users = [
    "Mike",
    "Jane",
    "Philip",
    "Helen",
    "Dave"
];

ReactDOM.render(<Users users={users} />, document.getElementById('main'));

import React from 'react';
import ReactDOM from 'react-dom';

import App1 from './app1.jsx'
import App2 from './app2.jsx'

ReactDOM.render(<App1><App2 /></App1>, document.getElementById('main'));
import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

import View1 from './views/view1.jsx';
import View2 from './views/view2.jsx';
import Home from './views/home.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <div id="container" className="panel well">
                    <ul>
                        <li><Link to="/"><button className="btn btn-lg btn-success">Home</button></Link></li>
                        <li><Link to="/view1"><button className="btn btn-lg btn-success">View 1</button></Link></li>
                        <li><Link to="/view2"><button className="btn btn-lg btn-success">View 2</button></Link></li>
                    </ul>
                </div>
                <div className="panel">{this.props.children}</div>
            </div>
        )}
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path="view1" component={View1} />
            <Route path="view2" component={View2} />
        </Route>
    </Router>, document.getElementById('main'));
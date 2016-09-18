import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, Link, IndexRoute, hashHistory, Redirect} from 'react-router';

import Home from './views/home.jsx';
import ListView from './views/listView.jsx';
import TableView from './views/tableView.jsx';

var users = [
    {first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
    {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
    {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
    {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id:78908},
    {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249, id:67653"},
    {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
    {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
    {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6", id: 34239}
];

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div id="container" className="panel well">
                    <ul>
                        <li><Link to="/listView"><button className="btn btn-lg btn-success">List view</button></Link></li>
                        <li><Link to="/tableView"><button className="btn btn-lg btn-success">Table view</button></Link></li>
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
            <Route path="listView" component={ListView} data={users} />
            <Route path="tableView" component={TableView} data={users} />
            <Redirect from="*" to="/" />
        </Route>
    </Router>,
    document.getElementById('main')
);
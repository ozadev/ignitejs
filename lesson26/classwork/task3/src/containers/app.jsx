import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import List from '../components/list.jsx';
import * as actions from '../actions/actions.js';

import * as async from '../actions/async.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        if (!this.props.loaded)
            this.props.fetchUsers('src/data/data.json');
        this.props.toggleShow();
    }

    render() {
        return (
            <div className="panel well">
                <button className="btn btn-default" onClick={this.clickHandler}>Show/hide user list</button>
                <h3>{this.props.loadStatus}</h3>
                <List show={this.props.showFlag} data={this.props.usersData}/>
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return {
        showFlag: state.show,
        loadStatus: state.users.status,
        loaded: state.users.loaded,
        usersData: state.users.users
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleShow: actions.toggleShow,
        fetchUsers: async.fetchUsers
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
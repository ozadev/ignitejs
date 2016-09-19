import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import List from '../components/list.jsx';
import Table from '../components/table.jsx';
import * as actions from '../actions/actions.js';
import * as async from '../actions/async.js';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.loadHandler = this.loadHandler.bind(this);
    }

    clickHandler() {
        var newItem = {
            text: document.getElementById('input').value,
            id: `${Date.now()}`
        };
        this.props.createItem(newItem);
    }

    removeItemHandler(e) {
        this.props.removeItem(e.target.dataset.id)
    }

    selectHandler(e) {
        this.props.changeViewType(e.target.value);
    }

    loadHandler() {
        if (!this.props.loaded)
            this.props.fetchUsers('src/data/data.json');
    }

    render() {
        return (
            <div className="panel well">
                <div className="input-group">
                    <input id="input" type="text" className="form-control" placeholder="Enter todo task"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.clickHandler}>Add task</button>
                    </span>
                </div>
                <div>
                    <h5>Select view type:</h5>
                    <select className="form-control" value={this.props.viewType} onChange={this.selectHandler}>
                        <option value="list">List</option>
                        <option value="table">Table</option>
                    </select>
                    <div className="load-btn-container">
                        <button className="btn btn-default" onClick={this.loadHandler}>Load tasks</button>
                        <h5>{this.props.loadStatus}</h5>
                    </div>
                </div>
                {(this.props.viewType == 'list') ?
                    <List items={this.props.itemsData} handler={this.removeItemHandler}/> :
                    <Table items={this.props.itemsData} handler={this.removeItemHandler}/>
                }
            </div>
        )
    }
} 

function mapStateToProps(state) {
    console.log(state);
    return {
        itemsData: state.data,
        viewType: state.viewType,
        loadStatus: state.status,
        loaded: state.loaded
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createItem: actions.createItem,
        removeItem: actions.removeItem,
        changeViewType: actions.changeViewType,
        fetchUsers: async.fetchUsers
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
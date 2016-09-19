import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListEdit from '../components/listEdit.jsx';
import * as actions from '../actions/actions.js';
import * as async from '../actions/async.js';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);
        this.loadHandler = this.loadHandler.bind(this);
        this.editItemHandler = this.editItemHandler.bind(this);
        this.saveEditHandler = this.saveEditHandler.bind(this);
        this.editInputChange = this.editInputChange.bind(this);
    }

    clickHandler() {
        var newItem = {
            text: document.getElementById('addInput').value,
            id: `${Date.now()}`
        };
        this.props.createItem(newItem);
    }

    removeItemHandler(e) {
        this.props.removeItem(e.target.dataset.id);
    }

    editItemHandler(e) {
        this.props.startEditItem(e.target.dataset.id);
    }

    editInputChange(e) {
        this.props.modifyEditItem(e.target.value);
    }

    saveEditHandler() {
        this.props.saveEditItem();
    }

    loadHandler() {
        if (!this.props.loaded)
            this.props.fetchUsers('src/data/data.json');
    }

    render() {
        return (
            <div className="panel well">
                <div className="input-group">
                    <input id="addInput" type="text" className="form-control" placeholder="Enter todo task"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.clickHandler}>Add task</button>
                    </span>
                </div>
                <div>
                    <div className="load-btn-container">
                        <button className="btn btn-default" onClick={this.loadHandler}>Load tasks</button>
                        <h5>{this.props.loadStatus}</h5>
                    </div>
                </div>
                <div className="input-group" style={{display: this.props.editStatus ? 'table' : 'none'}}>
                    <input id="editInput" type="text" className="form-control" placeholder="Enter todo task" value={this.props.editVal} onChange={this.editInputChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.props.saveEditItem}>Save</button>
                    </span>
                </div>
                <ListEdit items={this.props.itemsData}
                          removeHandler={this.removeItemHandler}
                          editHandler={this.editItemHandler} />
            </div>
        )
    }
} 

function mapStateToProps(state) {
    console.log(state);
    return {
        itemsData: state.data,
        loadStatus: state.status,
        loaded: state.loaded,
        editStatus: state.editStatus,
        editVal: state.editVal
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createItem: actions.createItem,
        removeItem: actions.removeItem,
        fetchUsers: async.fetchUsers,
        startEditItem: actions.startEditItem,
        saveEditItem: actions.saveEditItem,
        modifyEditItem: actions.modifyEditItem
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
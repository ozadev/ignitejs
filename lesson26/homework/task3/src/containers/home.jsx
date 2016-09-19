import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import List from '../components/list.jsx';
import Table from '../components/table.jsx';
import * as actions from '../actions/actions.js';
import * as async from '../actions/async.js';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.selectHandler = this.selectHandler.bind(this);
    }

    selectHandler(e) {
        this.props.changeViewType(e.target.value);
    }

    render() {
        return (
            <div className="panel well">
                <div>
                    <h5>Select view type:</h5>
                    <select className="form-control" value={this.props.viewType} onChange={this.selectHandler}>
                        <option value="list">List</option>
                        <option value="table">Table</option>
                    </select>
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
        viewType: state.viewType
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeViewType: actions.changeViewType
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/actions.js';


class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectGrade: 5
        };
        this.selectHandler = this.selectHandler.bind(this);
        this.submitGradeHandler = this.submitGradeHandler.bind(this)
    }

    selectHandler(e) {
        this.setState({selectGrade: e.target.value});
    }

    submitGradeHandler() {
        this.props.saveGrade(document.getElementById('grade').value);
    }

    render() {
        return (
            <div className="panel well">
                <div>
                    <h5>Please evaluate our ToDoList App:</h5>
                    <select id="grade" className="form-control" value={this.state.selectGrade} onChange={this.selectHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="load-btn-container">
                        <button className="btn btn-default" onClick={this.submitGradeHandler}>Submit</button>
                        <h5>{this.props.loadStatus}</h5>
                    </div>
                    <h5>Your last grade: {this.props.currGrade}</h5>
                    <h5>Total grade: {this.props.totalGrade}</h5>
                </div>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    console.log(state);
    return {
        currGrade: state.currGrade,
        totalGrade: state.totalGrade
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        saveGrade: actions.saveGrade
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(About);
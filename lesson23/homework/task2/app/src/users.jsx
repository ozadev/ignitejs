import React from 'react';

import List from './list.jsx'

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [...props.users],
            newUser: ''
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.handlerInputChange = this.handlerInputChange.bind(this);
    }

    clickHandler() {
        this.setState({users: [...this.state.users, this.state.newUser]});
        this.setState({newUser: ''});
    }

    handlerInputChange(e) {
        this.setState({newUser: e.target.value});
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.newUser} onChange={this.handlerInputChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.clickHandler}>Add</button>
                    </span>
                </div>
                <List users={this.state.users} />
            </div>
        );
    }
}

export default Users;
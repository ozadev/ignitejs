import React from 'react';

class ItemView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let userQuery = this.props.location.query;
        return(
            <div>
                <h3>User information</h3>
                <ul className="list-group">
                    <li>id: {this.props.params.id}</li>
                    <li>First name: {userQuery.first_name}</li>
                    <li>Last name: {userQuery.last_name}</li>
                    <li>Email: {userQuery.email}</li>
                    <li>Gender: {userQuery.gender}</li>
                    <li>IP: {userQuery.ip_address}</li>
                </ul>
            </div>
        )
    }
}

export default ItemView;
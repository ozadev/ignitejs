import React from 'react';
import {Link} from 'react-router';

class TableView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let tableContent = this.props.route.data.map((elem, index) => {
            return (
                <tr key={index}>
                    <td>
                        <Link to={{pathname: `/tableView/${elem.id}`, query: {...elem}}}>
                            {elem.first_name}
                        </Link>
                    </td>
                    <td>{elem.last_name}</td>
                    <td>{elem.gender}</td>
                </tr>
            );
        });

        return (
            <div>
                <h3>Table view</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Gender</th>
                    </tr>
                    </thead>
                    <tbody>{tableContent}</tbody>
                </table>
            </div>
        );
    }
}

export default TableView;
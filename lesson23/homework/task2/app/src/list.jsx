import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.users.map((elem, index) => {
                    return <li key={index} className="list-group-item">{elem}</li>
                })}
            </ul>
        );
    }
}

export default List;
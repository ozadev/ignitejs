import React from 'react';

class Table extends React.Component{

    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Task text:</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.text}</td>
                                <td>
                                    <span data-id={item.id} onClick={this.props.handler} className="glyphicon glyphicon-remove"></span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Table;
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
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.text}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Table;
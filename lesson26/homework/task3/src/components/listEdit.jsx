import React from 'react';

class ListEdit extends React.Component{

    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <ul>
                {this.props.items.map((item) => {
                    return (
                        <li key={item.id}>{item.text}
                            <span data-id={item.id} onClick={this.props.removeHandler} className="glyphicon glyphicon-remove"></span>
                            <span data-id={item.id} onClick={this.props.editHandler} className="glyphicon glyphicon-edit"></span>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListEdit;
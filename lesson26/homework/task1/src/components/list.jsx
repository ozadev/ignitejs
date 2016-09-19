import React from 'react';

class List extends React.Component{

    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <ul>
                {this.props.items.map((item) => {
                    return (
                        <li key={item.id}>{item.text}
                            <span data-id={item.id} onClick={this.props.handler} className="glyphicon glyphicon-remove"></span>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default List;
import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let listElems = this.props.data.map((item, index) => {
            return (
                <li className="list-group-item" key={index}>
                    {Object.keys(item).map((prop) => {
                        return `${prop}: ${item[prop]}; `
                    })}
                </li>
            );
        });
        return (
            <div style={{display: this.props.show ? 'block' : 'none'}}>
                <h3>List: </h3>
                <ul className="list-group">{listElems}</ul>
            </div>
        )
    }
}

export default List;
import React from 'react';
import {Link} from 'react-router';

class ListView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let listElems = this.props.route.data.map((item, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <Link to={{pathname: `/listView/${item.id}`, query: {...item}}}>
                    {`${item.first_name} ${item.last_name};`}
                    </Link>
                </li>
            );
        });
        return(
            <div>
                <h3>List view</h3>
                <ul className="list-group">{listElems}</ul>
            </div>
        )
    }
}

export default ListView;
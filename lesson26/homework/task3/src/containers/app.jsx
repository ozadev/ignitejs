import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="panel">
                <ul className="nav">
                    <li>
                        <Link to="/">
                            <button className="btn btn-primary">Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/edit">
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <button className="btn btn-primary">About</button>
                        </Link>
                    </li>
                </ul>
                <div className="panel">
                    {this.props.children}
                </div>
            </div>
        )
    }
} 

export default App;
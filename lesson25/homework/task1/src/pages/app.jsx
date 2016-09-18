import React from 'react';

import appStore from '../stores/appStore';
import * as appActions from '../actions/appActions';

import List from './list.jsx';

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            items: appStore.getItems()
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);
    }

    clickHandler() {
        var newItem = {
            name: document.getElementById('input').value,
            id: `${Date.now()}`
        };
        appActions.createItem(newItem);
    }

    componentWillMount() {
        appStore.on('itemsChange', () => {
            this.setState({items: appStore.getItems()})
        })
    }

    removeItemHandler(e) {
        appActions.removeItem(e.target.dataset.id)
    }

    render() {
        return (
            <div className="panel well">
                <div className="input-group">
                    <input id="input" type="text" className="form-control" placeholder="Enter todo task"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.clickHandler}>Add task</button>
                    </span>
                </div>
                <List items={this.state.items} handler={this.removeItemHandler}/>
            </div>
        )
    }
}

export default App;
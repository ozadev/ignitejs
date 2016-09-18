import React from 'react';

import appStore from '../stores/appStore';
import * as appActions from '../actions/appActions';


class App extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            currClass: appStore.getClass()
        };

        this.clickHandler = this.clickHandler.bind(this)
    } 

    componentWillMount() {
        appStore.on('classChange', () => {
            this.setState({ currClass: appStore.getClass() })
            }
        )
    }

    clickHandler() {      
        appActions.switchClass();
    }

    render() {
        return (
            <div>
                <p><button className="btn btn-default" onClick={this.clickHandler}>Change style</button></p>
                <div className={this.state.currClass}></div>
            </div>
        )
    }
}

export default App;
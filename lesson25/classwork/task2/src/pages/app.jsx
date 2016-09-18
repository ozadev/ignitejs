import React from 'react';

import appStore from '../stores/appStore';
import * as appActions from '../actions/appActions';


class App extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            currCount: appStore.getCount()
        };

        this.handlerClickStart = this.handlerClickStart.bind(this);
        this.handlerClickStop = this.handlerClickStop.bind(this);
        this.handlerClickReset = this.handlerClickReset.bind(this);
    } 

    componentWillMount() {
        appStore.on('countChange', () => {
            this.setState({ currCount: appStore.getCount() });
            }
        )
    }

    handlerClickStart() {
        appActions.startCount();
    }
    handlerClickStop() {
        appActions.stopCount();
    }
    handlerClickReset() {
        appActions.clearCount();
    }

    render() {
        return (
            <div>
                <h1>{this.state.currCount}</h1>
                <p>
                    <button className="btn btn-default" onClick={this.handlerClickStart}>Start</button>
                    <button className="btn btn-default" onClick={this.handlerClickStop}>Stop</button>
                    <button className="btn btn-default" onClick={this.handlerClickReset}>Reset</button>
                </p>
            </div>
        )
    }
}


export default App;
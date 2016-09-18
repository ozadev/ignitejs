import React from 'react';

import appStore from '../stores/appStore';
import * as appActions from '../actions/appActions';


class App extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            valA: appStore.getValA(),
            valB: appStore.getValB(),
            result: appStore.getResult()
        };

        this.handlerClickCalc = this.handlerClickCalc.bind(this);
        this.handlerChangeValA = this.handlerChangeValA.bind(this);
        this.handlerChangeValB = this.handlerChangeValB.bind(this);
    } 

    componentWillMount() {
        appStore.on('resultChanged', () => {
            this.setState({ result: appStore.getResult() });
            }
        );
        appStore.on('valAChanged', () => {
                this.setState({ valA: appStore.getValA() });
            }
        );
        appStore.on('valBChanged', () => {
                this.setState({ valB: appStore.getValB() });
            }
        )
    }

    handlerClickCalc(e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        appActions.makeCalc(e.target.dataset.calcType);
    }

    handlerChangeValA(e) {
        appActions.changeValA(e.target.value);
    }

    handlerChangeValB(e) {
        appActions.changeValB(e.target.value);
    }

    render() {
        return (
            <div>
                <p><input type="text" value={this.state.valA} onChange={this.handlerChangeValA} placeholder="Enter number A" /></p>
                <p><input type="text" value={this.state.valB} onChange={this.handlerChangeValB} placeholder="Enter number B" /></p>
                <p onClick={this.handlerClickCalc}>
                    <button className="btn btn-default" data-calc-type="sum">+</button>
                    <button className="btn btn-default" data-calc-type="sub">-</button>
                    <button className="btn btn-default" data-calc-type="mul">*</button>
                    <button className="btn btn-default" data-calc-type="div">/</button>
                </p>
                <h1>{this.state.result}</h1>
            </div>
        )
    }
}

export default App;
var React = require('react');
var ReactDOM = require('react-dom');


var LoadCounter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        }
    },
    counterInc: function() {
        this.setState({counter: this.state.counter + 1});
    },
    handlerClickStart: function() {
        this.counterId = setInterval(this.counterInc, 1000);
    },
    handlerClickStop: function() {
        clearInterval(this.counterId);
    },
    handlerClickReset: function() {
        this.setState({counter: 0});
    },
    render: function() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <p>
                    <button className="btn btn-default" onClick={this.handlerClickStart}>Start</button>
                    <button className="btn btn-default" onClick={this.handlerClickStop}>Stop</button>
                    <button className="btn btn-default" onClick={this.handlerClickReset}>Reset</button>
                </p>
            </div>
        );
    }
});


var container = document.getElementById('main');

ReactDOM.render(<LoadCounter />, container);
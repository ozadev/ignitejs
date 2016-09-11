var React = require('react');
var ReactDOM = require('react-dom');


var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        }
    },
    handlerClickInc: function() {
        this.setState({counter: this.state.counter + 1});
    },
    handlerClickDec: function() {
        this.setState({counter: this.state.counter - 1});
    },
    render: function() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <p>
                    <button className="btn btn-default" onClick={this.handlerClickInc}>+</button>
                    <button className="btn btn-default" onClick={this.handlerClickDec}>-</button>
                </p>
            </div>
        );
    }
});


var container = document.getElementById('main');

ReactDOM.render(<Counter />, container);
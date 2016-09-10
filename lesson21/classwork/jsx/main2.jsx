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
    componentDidMount: function() {
        setInterval(this.counterInc, 1000);
    },
    render: function() {
        return (
            <h1>{this.state.counter}</h1>
        );
    }
});


var container = document.getElementById('main');

ReactDOM.render(<LoadCounter />, container);
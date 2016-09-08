var React = require('react');
var ReactDOM = require('react-dom');

var SumBlock = React.createClass({
    propTypes: {
        num1: React.PropTypes.number,
        num2: React.PropTypes.number
    },
    getDefaultProps: function() {
        return {
            num1: 0,
            num2: 0
        }
    },
    render: function () {
        return <h1>{this.props.num1} + {this.props.num2} = {this.props.num1 + this.props.num2}</h1>;
    }
});


ReactDOM.render(<SumBlock num1={10} num2={5} />, document.getElementById('main'));
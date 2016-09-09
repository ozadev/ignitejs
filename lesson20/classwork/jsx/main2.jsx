var React = require('react');
var ReactDOM = require('react-dom');

var SumByType = React.createClass({

    propTypes: {
        mode: React.PropTypes.bool,
        num1: React.PropTypes.number,
        num2: React.PropTypes.number
    },
    getDefaultProps: function() {
        return {
            mode: true,
            num1: 0,
            num2: 0
        }
    },
    render: function () {
        var number1 = this.props.mode ? this.props.num1 : this.props.num1.toString();
        var number2 = this.props.mode ? this.props.num2 : this.props.num2.toString();

        return <h1>{number1} + {number2} = {number1 + number2}</h1>;
    }
});


ReactDOM.render(<SumByType num1={10} num2={5} mode={true}/>, document.getElementById('main'));
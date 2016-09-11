var React = require('react');
var ReactDOM = require('react-dom');


var Counter = React.createClass({
    getInitialState: function() {
        return {
            valA: '',
            valB: '',
            result: 0
        }
    },
    handlerClickSum: function() {
        this.setState({result: +this.state.valA + +this.state.valB});
    },
    handlerClickSub: function() {
        this.setState({result: this.state.valA - this.state.valB});
    },
    handlerClickMul: function() {
        this.setState({result: this.state.valA * this.state.valB});
    },
    handlerClickDiv: function() {
        if (+this.state.valB === 0) {
            this.setState({result: 'Error: division by zero'});
        }
        else {
            this.setState({result: this.state.valA / this.state.valB});
        }
    },
    handlerClickCalc: function(e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        if (this.state.valA === '' || this.state.valB === '') {
            this.setState({result: 'Error: require input numbers'});
            return;
        }

        var result;

        switch(e.target.dataset.calcType) {
            case 'sum':
                result = +this.state.valA + +this.state.valB;
                break;
            case 'sub':
                result = this.state.valA - this.state.valB;
                break;
            case 'mul':
                result = this.state.valA * this.state.valB;
                break;
            case 'div':
                if (+this.state.valB === 0) {
                    result = 'Error: division by zero';
                }
                else {
                    result = this.state.valA / this.state.valB;
                }
                break;
            default:
                result = "Error: invalid calc type";
        }

        this.setState({result: result});

    },
    handlerChangeValA: function(e) {
        var newValA = e.target.value.replace(/\D/, '');
        this.setState({valA: newValA});
    },
    handlerChangeValB: function(e) {
        var newValB = e.target.value.replace(/\D/, '');
        this.setState({valB: newValB});
    },
    render: function() {
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
        );
    }
});


var container = document.getElementById('main');

ReactDOM.render(<Counter />, container);
var React = require('react');
var ReactDOM = require('react-dom');


var DivStyleChangeble = React.createClass({
    getInitialState: function() {
        return {
            bgcolor: 'red'
        }
    },
    handlerButtonClick: function () {
        this.setState({bgcolor: (this.state.bgcolor == 'red') ? 'black' : 'red'});
    },
    render: function() {
        return (
            <div>
                <p><button className="btn btn-default" onClick={this.handlerButtonClick}>Change style</button></p>
                <div className="block" style={{backgroundColor: this.state.bgcolor}}></div>
            </div>
        );
    }
});


var container = document.getElementById('main');

ReactDOM.render(<DivStyleChangeble />, container);
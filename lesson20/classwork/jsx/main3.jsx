var React = require('react');
var ReactDOM = require('react-dom');
// + ' : ' + this.props.style[item]

var DivCustomStyle = React.createClass({
    getInitialState: function() {
        return {
            checked: false
        }
    },
    handleCheck: function(event) {
        this.setState({checked: !this.state.checked})
    },
    render: function () {
        return (
            <div>
                <p><input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>Use style</p>
                <div className="box" style={this.state.checked ? this.props.style : {}}>Text</div>
            </div>
        );
    }
});


ReactDOM.render(<DivCustomStyle style={{color: 'red', backgroundColor: 'lightblue', margin: '50px auto'}}/>, document.getElementById('main'));
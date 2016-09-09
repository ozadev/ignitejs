var React = require('react');
var ReactDOM = require('react-dom');

var Parent = React.createClass({
    getInitialState: function () {
        return {
            inputVal: undefined
        }
    },
    handlerInputValChange: function(e) {
        this.setState({inputVal: e.target.value});
    },
    render: function() {
        return (
            <div>
                <input type="text" onChange={this.handlerInputValChange} placeholder="Enter number" />
                <Child showNum={this.state.inputVal}/>
            </div>
        );
    }
});

var Child = React.createClass({
    getDefaultProps: function() {
        return {
            users: [
                {name:"Anne Montgomery",gender:"Female"},
                {name:"Annie George",gender:"Female"},
                {name:"Gary Butler",gender:"Male"},
                {name:"Lisa Mendoza",gender:"Female"},
                {name:"Marilyn Henry",gender:"Female"},
                {name:"Johnny Tucker",gender:"Male"},
                {name:"Chris Jacobs",gender:"Male"},
                {name:"Benjamin James",gender:"Male"}
            ]
        }
    },
    render: function() {
        var listElemArr = [];
        var listShowLength = parseInt(this.props.showNum);

        // Show whole list by default
        if (isNaN(listShowLength)) {
            listShowLength = this.props.users.length;
        } 

        for (var i = 0; i < Math.min(this.props.users.length, listShowLength); i++) {
            listElemArr.push(<li key={i}>{this.props.users[i].name + ', ' + this.props.users[i].gender}</li>)
        }
        return <ul>{listElemArr}</ul>;
    }
});


ReactDOM.render(<Parent />, document.getElementById('main'));
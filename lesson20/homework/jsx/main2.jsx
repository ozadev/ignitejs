var React = require('react');
var ReactDOM = require('react-dom');

function getRandomColor() {
    var h = Math.floor(Math.random() * (255 - 1) + 1);
    var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
    var l = '50%';
    var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
    return randomColor;
}


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
    componentWillMount: function () {
        this.listColor = '#000';
    },
    shouldComponentUpdate: function (nextProps) {
        //Continue if "parsed number" from showNum attribute has changed
        return (parseInt(nextProps.showNum) !== parseInt(this.props.showNum) && parseInt(nextProps.showNum))

    },
    componentWillUpdate: function () {
        this.listColor = getRandomColor();
    },
    render: function() {
        var listElemArr = [];
        var listShowLength = parseInt(this.props.showNum);

        // Show whole list by default
        if (isNaN(listShowLength)) {
            listShowLength = this.props.users.length;
        }

        for (var i = 0; i < Math.min(this.props.users.length, listShowLength); i++) {
            listElemArr.push(<li key={i} style={{color: this.listColor}}>{this.props.users[i].name + ', ' + this.props.users[i].gender}</li>)
        }
        return <ul>{listElemArr}</ul>;
    }
});

ReactDOM.render(<Parent />, document.getElementById('main'));
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
            inputVal: undefined,
            checked: false
        }
    },
    handleCheck: function() {
        this.setState({checked: !this.state.checked})
    },
    handlerInputValChange: function(e) {
        this.setState({inputVal: e.target.value});
    },
    render: function() {
        return (
            <div>
                <p><input type="text" onChange={this.handlerInputValChange} placeholder="Enter number" /></p>
                <p><input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>Display list/form</p>
                <Child showNum={this.state.inputVal} displayType={this.state.checked} />
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
            ],
            displayType: true
        }
    },
    componentWillMount: function () {
        this.listColor = '#000';
    },
    shouldComponentUpdate: function (nextProps) {
        //Continue if displayType attribute has changed
        if (nextProps.displayType !== this.props.displayType)
            return true;
        //Continue if "parsed number" from showNum attribute has changed
        return (parseInt(nextProps.showNum) !== parseInt(this.props.showNum) && parseInt(nextProps.showNum))

    },
    componentWillUpdate: function () {
        this.listColor = getRandomColor();
    },
    render: function() {
        var elemArr = [];
        var listShowLength = parseInt(this.props.showNum);

        // Show whole list by default
        if (isNaN(listShowLength)) {
            listShowLength = this.props.users.length;
        }

        for (var i = 0; i < Math.min(this.props.users.length, listShowLength); i++) {
            if (this.props.displayType) {
                elemArr.push(<li key={i} style={{color: this.listColor}}>{this.props.users[i].name + ', ' + this.props.users[i].gender}</li>);
            }
            else {
                elemArr.push(<tr key={i} style={{color: this.listColor}}><td>{this.props.users[i].name}</td><td>{this.props.users[i].gender}</td></tr>);
            }
        }

        if (this.props.displayType) {
            return <ul>{elemArr}</ul>;
        }
        else {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>gender</th>
                        </tr>
                    </thead>
                    <tbody>{elemArr}</tbody>
                </table>
            );
        }
    }
});

ReactDOM.render(<Parent />, document.getElementById('main'));
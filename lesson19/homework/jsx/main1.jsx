var React = require('react');
var ReactDOM = require('react-dom');


var users = [
    {name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}
];


var UserTable = React.createClass({
    render: function() {
        return (
            <table className="table">
                <thead >
                    <tr><td>Name</td><td>Gender</td></tr>
                </thead>
                <tbody>
                    {this.props.users.map(function(item, index) {
                        return <tr key={index}><td>{item.name}</td><td>{item.gender}</td></tr>
                    })}
                </tbody>
            </table>
        );
    }
});


ReactDOM.render(<UserTable users={users}/>, document.getElementById('main'));